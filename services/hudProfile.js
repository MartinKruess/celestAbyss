import { characterError } from './characterPolicy.js';

export const defaultHudProfile = () => ({ fastSettings: { toolbar: { mode: 0, isLocked: true } }, settings: {} });

// Only implemented settings are accepted. Chat/map and layout settings can be added
// independently without turning the profile into an arbitrary document write.
export function normalizeHudProfile(profile) {
  const object = value => value && typeof value === 'object' && !Array.isArray(value);
  const keys = (value, expected) => object(value) && Object.keys(value).sort().join(',') === expected;
  if (!keys(profile, 'fastSettings,settings') || !keys(profile.fastSettings, 'toolbar')
    || !keys(profile.fastSettings.toolbar, 'isLocked,mode') || !keys(profile.settings, '')) {
    throw characterError('INVALID_HUD_PROFILE', 400);
  }
  const { mode, isLocked } = profile.fastSettings.toolbar;
  if (!Number.isInteger(mode) || mode < 0 || mode > 3 || typeof isLocked !== 'boolean') {
    throw characterError('INVALID_HUD_PROFILE', 400);
  }
  return { fastSettings: { toolbar: { mode, isLocked } }, settings: {} };
}
