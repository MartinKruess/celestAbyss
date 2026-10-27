import mongoose from 'mongoose';
import { randomUUID } from 'node:crypto';
import { DedicatedRuntimeModel } from '../models/dedicatedRuntimeSchema.js';
import { CharDataModel } from '../models/characterSchema.js';
import { characterError } from './characterPolicy.js';
import { trackService } from './pendingWork.js';

const validInstance = value => typeof value === 'string' && /^[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(value);
const fenced = () => characterError('SERVER_INSTANCE_CHANGED', 409);
export function createDedicatedRuntime({ records = DedicatedRuntimeModel, characters = CharDataModel,
  transaction = work => mongoose.connection.transaction(work, { readConcern: { level: 'snapshot' }, writeConcern: { w: 'majority', j: true, wtimeout: 5000 } }), now = () => new Date() } = {}) {
  return trackService({
    status: async serverID => {
      const current = await records.findById(serverID).lean();
      return { instanceID: current?.instanceID || '', state: current?.state || 'offline' };
    },
    // Called only by the supervisor after the previous process has exited.
    // Compare-and-swap makes delayed retries unable to replace a newer process.
    start: async ({ serverID, instanceID, expectedInstanceID }) => {
      if (!validInstance(instanceID) || (expectedInstanceID !== '' && !validInstance(expectedInstanceID)))
        throw characterError('INVALID_SERVER_INSTANCE', 400);
      return transaction(async session => {
        const current = await records.findById(serverID).session(session).lean();
        if (current?.instanceID === instanceID) return { ready: current.state === 'ready', instanceID };
        if ((current?.instanceID || '') !== expectedInstanceID) throw fenced();
        await records.updateOne({ _id: serverID }, { $set: { instanceID, state: 'ready', startedAt: now(), lastProbeAt: now() },
          $inc: { revision: 1 } }, { upsert: !current, session });
        await characters.updateMany({ 'activePlay.serverID': serverID, 'activePlay.closed': false },
          { $set: { 'activePlay.closed': true } }, { session });
        return { ready: true, instanceID };
      });
    },
    assertCurrent: async ({ serverID, instanceID }) => {
      if (!validInstance(instanceID) || !await records.exists({ _id: serverID, instanceID })) throw fenced();
    },
    admit: async ({ serverID, instanceID, session }) => {
      // This write serializes admission with a concurrent process replacement.
      const result = await records.updateOne({ _id: serverID, instanceID, state: 'ready' },
        { $inc: { revision: 1 } }, { session });
      if (!result.matchedCount) throw characterError('SERVER_NOT_READY', 503);
    },
    probe: async ({ serverID, instanceID }) => {
      if (!validInstance(instanceID)) throw fenced();
      const probeID = randomUUID();
      const result = await records.findOneAndUpdate({ _id: serverID, instanceID },
        { $set: { lastProbeAt: now(), probeID } }, { new: true, writeConcern: { w: 'majority', j: true, wtimeout: 5000 } }).lean();
      if (!result) throw fenced();
      if (result.probeID !== probeID) throw characterError('STORAGE_PROBE_FAILED', 503);
      return { ready: result.state === 'ready', instanceID };
    },
    maintenance: async ({ serverID, instanceID }) => {
      const result = await records.updateOne({ _id: serverID, instanceID }, { $set: { state: 'draining' } });
      if (!result.matchedCount) throw fenced();
      return { draining: true };
    },
  });
}
export const dedicatedRuntime = createDedicatedRuntime();
