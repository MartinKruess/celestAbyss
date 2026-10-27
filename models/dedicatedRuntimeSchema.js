import mongoose, { Schema } from 'mongoose';

// One fenced process generation per configured game server. No player data.
export const DedicatedRuntimeModel = mongoose.model('dedicatedRuntime', new Schema({
  _id: String,
  instanceID: { type: String, required: true },
  state: { type: String, enum: ['ready', 'draining'], required: true },
  revision: { type: Number, default: 0 },
  startedAt: Date,
  lastProbeAt: Date,
  probeID: String,
}, { versionKey: false }));
