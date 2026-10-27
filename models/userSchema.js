import mongoose, { Schema } from 'mongoose';
import { CharDataModel } from './characterSchema.js';

const playerSchema = mongoose.Schema({
    role: { type: String, enum: ['player', 'moderator', 'admin'], default: 'player' },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        default: "en"
    },
    maxChars: {
        type: Number,
        default: 6,
    },
    characters: [{
        type: Schema.Types.ObjectId, ref: CharDataModel,
    }],
    isOnline: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
    banReason: { type: String, default: '', maxlength: 500 },
});

export const UserDataModel = mongoose.model('players', playerSchema);
