import dotenv from 'dotenv';
const env = dotenv.config();

export const envConfig = {
    FRONTEND_URL: process.env.FRONTEND_URL,
    PORT: process.env.PORT,

    DB_MONGO_URL: process.env.DB_MONGO_URL || process.env.MONGODB_URI,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME || 'celestabyss_dev',

    // LOGIN Auth
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,

    // Datenstorage (images)
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
};
