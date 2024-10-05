import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    ACCESS_TOKEN: {
        SECRET: process.env.ACCESS_TOKEN_SECRET,
        EXPIRY: 3600
    },
    REFRESH_TOKEN: {
        SECRET: process.env.REFRESH_TOKEN_SECRET,
        EXPIRY: 3600 * 24 * 365
    }
}

