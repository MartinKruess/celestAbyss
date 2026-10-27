import { characterError } from './characterPolicy.js';

export const INVENTORY_CAPACITY = 64;
export const emptyInventoryState = () => ({ capacity: INVENTORY_CAPACITY, entries: [], toolbar: Array(10).fill('') });
export function normalizeInventoryState(value, { upgradeLegacy = false } = {}) {
  const capacity = upgradeLegacy && value?.capacity === 20 ? 20 : INVENTORY_CAPACITY;
  const fail = () => { throw characterError('INVALID_INVENTORY_STATE', 400); };
  if (!value || typeof value !== 'object' || Array.isArray(value)
    || Object.keys(value).sort().join(',') !== 'capacity,entries,toolbar'
    || value.capacity !== capacity || !Array.isArray(value.entries) || value.entries.length > capacity
    || !Array.isArray(value.toolbar) || value.toolbar.length !== 10) fail();
  const ids = new Set(), slots = new Set();
  const entries = value.entries.map(entry => {
    if (!entry || Object.keys(entry).sort().join(',') !== 'definitionId,instanceId,slot'
      || typeof entry.instanceId !== 'string' || !/^[a-f0-9]{32}$/.test(entry.instanceId)
      || entry.definitionId !== 'item-x' || !Number.isInteger(entry.slot) || entry.slot < 0 || entry.slot >= capacity
      || ids.has(entry.instanceId) || slots.has(entry.slot)) fail();
    ids.add(entry.instanceId); slots.add(entry.slot);
    return { instanceId: entry.instanceId, definitionId: entry.definitionId, slot: entry.slot };
  });
  const bound = new Set();
  const toolbar = value.toolbar.map(instanceId => {
    if (typeof instanceId !== 'string' || (instanceId !== '' && (!ids.has(instanceId) || bound.has(instanceId)))) fail();
    if (instanceId) bound.add(instanceId);
    return instanceId;
  });
  return { capacity: INVENTORY_CAPACITY, entries, toolbar };
}
