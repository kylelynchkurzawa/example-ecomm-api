let dotenv = require('dotenv').config();//instantiate environment variables
let ENV = {};

ENV.api_env = process.env.API_ENV || '';
ENV.api_port = process.env.API_PORT || '';
ENV.api_encoding_secret = process.env.API_ENCODING_SECRET || '';

ENV.db_dialect = process.env.DB_DIALECT || '';
ENV.db_host = process.env.DB_HOST || '';
ENV.db_password = process.env.DB_PASSWORD || '';
ENV.db_port = process.env.DB_PORT || '';
ENV.db_schema = process.env.DB_SCHEMA || '';
ENV.db_user = process.env.DB_USER || '';

module.exports = ENV;
