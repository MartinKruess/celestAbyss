import mongoose, { Schema } from 'mongoose';

const string = {
    type: String,
}

const number = {
    type: Number,
    default: 0,
}

const toolbarSettingsSchema = new Schema({
    mode: { type: Number, min: 0, max: 3, default: 0 },
    isLocked: { type: Boolean, default: true },
}, { _id: false });
const hudProfileSchema = new Schema({
    fastSettings: { type: new Schema({
        toolbar: { type: toolbarSettingsSchema, default: () => ({}) },
    }, { _id: false }), default: () => ({}) },
    settings: { type: new Schema({}, { _id: false }), default: () => ({}) },
}, { _id: false, minimize: false });

const characterSchema = mongoose.Schema({
    accountID: {
        type: String,
        required: true,
    },
    charName: {
        type: String,
        required: true,
        unique: true,
    },
    class: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    server: {
        type: String,
        default: "Asgard",
        required: true,
    },
    level: {
        type: Number,
        default: 1,
    },
    experience: number,
    skillpoints: {
        type: Number,
        default: 0,
    },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: 'skills'
    }],
    completedSkillQuests: { type: [{ type: String, enum: ['foundation', 'specialization'] }], default: () => [] },
    toolbarSkills: { type: [new Schema({
        bar: { type: Number, min: 0, max: 3, required: true },
        index: { type: Number, min: 0, max: 9, required: true },
        number: { type: Number, min: 1, required: true },
    }, { _id: false })], default: () => [] },
    learnedSkills: { type: [new Schema({
        number: { type: Number, required: true, min: 1 },
        level: { type: Number, required: true, min: 1, max: 1000 },
    }, { _id: false })], default: () => [] },
    inventory: [{
        type: Schema.Types.ObjectId,
        ref: 'inventorys'
    }],
    titels: {
        type: Array
    },
    tribe: string,
    moral: {
        type: Number,
        default: 0
    },
    position: {
        type: String,
        default: "0,0,0",
    },
    lastSavedAt: Date,
    hudProfile: { type: hudProfileSchema, default: () => ({}) },
    // New server-authoritative runtime bag. Legacy inventory references remain intact.
    inventoryState: { type: new Schema({
        capacity: { type: Number, default: 64, min: 64, max: 64 },
        entries: { type: [new Schema({
            instanceId: { type: String, required: true },
            definitionId: { type: String, enum: ['item-x'], required: true },
            slot: { type: Number, min: 0, max: 63, required: true },
        }, { _id: false })], default: () => [] },
        toolbar: { type: [String], default: () => Array(10).fill('') },
    }, { _id: false }), default: () => ({}) },
    currentHealth: { type: Number, min: 0 },
    currentMana: { type: Number, min: 0 },
    // Only the Dedicated API may set these fields; hidden from ordinary character replies.
    activePlay: { type: new Schema({
        leaseHash: String, serverID: String, instanceID: String, sessionID: String, expiresAt: Date, sequence: Number, closed: Boolean,
        lastSaveId: String, lastSaveHash: String,
    }, { _id: false }), select: false },
});

export const CharDataModel = mongoose.model('characters', characterSchema);


// optic: {
//     hairstyle: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     haircolor: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     head: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     eyes: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     nose: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     mouth: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     ears: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     body: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     arms: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     hands: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     legs: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
//     feeds: {
//         type: Schema.Types.ObjectId, ref: OpticModel,
//     },
// },
