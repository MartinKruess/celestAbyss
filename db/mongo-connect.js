import mongoose from 'mongoose';
import { envConfig } from '../scripts/config.js';

mongoose
    .connect(envConfig.DB_MONGO_URL)
    .then(() => console.log('MongoDB Connection established'))
    .catch((err) => console.log('Error: ', err.message));