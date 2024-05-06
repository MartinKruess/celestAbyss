import mongoose, { Schema } from 'mongoose';
import { CharDataModel } from './characterSchema.js';

const playerSchema = mongoose.Schema({
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
        default: ""
    },
    characters: [{
        type: Schema.Types.ObjectId, ref: CharDataModel,
    }],
    isOnline: {
        type: Boolean,
    },
    isBanned: {
        type: Boolean,
    },
});

export const UserDataModel = mongoose.model('players', playerSchema);