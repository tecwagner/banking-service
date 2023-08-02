export default () => ({
  // host: process.env.SERVER_HOST,

  api_port: process.env.API_PORT,

  database: {
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
  },
});
