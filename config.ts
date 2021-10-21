const jwtSecretKey = process.env.JWT_SECRET_KEY;

export default {
    jwt: {
        JWT_SECRET: jwtSecretKey
    },
}