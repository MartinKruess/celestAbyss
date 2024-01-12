import dotenv from 'dotenv';
const env = dotenv.config();

export const envConfig = {
    FRONTEND_URL: process.env.FRONTEND_URL,

    DB_MONGO_URL: process.env.DB_MONGO_URL,

    // LOGIN oAuth (Google)
    APP_ACCESS_TOKEN: process.env.APP_ACCESS_TOKEN,

    // LOGIN Auth
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

    // Paymentsystems
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_SECRET: process.env.PAYPAL_SECRET,

    // Datenstorage (images)
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
};