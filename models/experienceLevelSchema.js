import mongoose, {Schema} from 'mongoose';

function levelSchema() {
  const schema = new Schema({
    level: {type: Number, required: true, min: 1, max: 200, validate: Number.isInteger},
    maximumLevel: {type: Boolean, required: true},
    neededXp: {type: Number, default: null, validate: value => value === null || (Number.isSafeInteger(value) && value > 0)},
    cumulativeXp: {type: Number, required: true, validate: value => Number.isSafeInteger(value) && value >= 0},
    referenceHoursToNextLevel: {type: Number, default: null, min: 0},
    referenceCumulativeHours: {type: Number, required: true, min: 0},
    rulesVersion: {type: Number, required: true},
  }, {versionKey: false});
  schema.index({level: 1}, {unique: true});
  schema.pre('validate', function () {
    if (this.maximumLevel !== (this.level === 200)) this.invalidate('maximumLevel', 'Maximum is level 200');
    if (this.maximumLevel !== (this.neededXp === null)) this.invalidate('neededXp', 'Only maximum level has no next requirement');
    if (this.maximumLevel !== (this.referenceHoursToNextLevel === null)) this.invalidate('referenceHoursToNextLevel', 'Only maximum level has no next duration');
  });
  return schema;
}

export const PlayerExperienceLevelModel = mongoose.model('PlayerExperienceLevel', levelSchema(), 'playerExperienceLevels');
export const PetExperienceLevelModel = mongoose.model('PetExperienceLevel', levelSchema(), 'petExperienceLevels');
