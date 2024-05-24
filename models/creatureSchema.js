import mongoose, { Schema } from 'mongoose';

const creatureSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    type: {
        type: String,
    },
    tamingChance: {
        type: Number,
        default: 1,
    },
    firstTamedBy: {
        type: Schema.Types.ObjectId,
        ref: 'characters',
    }
});

export const CreatureModel = mongoose.model('creatures', creatureSchema);


ridable: {
    type: Boolean,
    default: false,
},
level: {
    type: Number,
    default: 1,
},
name: {
    type: String,
},
health: {
    type: Number,
    default: 100,
},
attack: {
    type: Number,
    default: 10,
},
pdef: {
    type: Number,
    default: 10,
},
mdef: {
    type: Number,
    default: 10,
},
speed: {
    type: Number,
    default: 10,
},
skills: [
    {
        type: Schema.Types.ObjectId,
        ref: 'creatureSkills',
    },
]