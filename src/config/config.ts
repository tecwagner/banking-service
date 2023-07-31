export default () => ({
  host: process.env.HOST || 'localhost',

  api_port: process.env.PORT || 3010,

  database: {
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT || 5432,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    db_sync: process.env.DB_SYNC,
  },
});
