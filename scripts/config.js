import dotenv from 'dotenv';
const env = dotenv.config();

export const envConfig = {
    FRONTEND_URL: process.env.FRONTEND_URL,
    PORT: process.env.PORT,

    DB_MONGO_URL: process.env.DB_MONGO_URL,

    // LOGIN Auth
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

    // Datenstorage (images)
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
};