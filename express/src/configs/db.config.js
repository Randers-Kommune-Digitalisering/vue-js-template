const env = process.env;

const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_DATABASE || 'demo',
    port: env.DB_PORT || 3306
};

module.exports = db;