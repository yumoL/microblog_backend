require('dotenv').config()

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'microblog_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAlises: false
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'microblog_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAlises: false
  },
  production: {
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    host: `${process.env.DB_HOST}`,
    dialect: 'mysql',
    operatorsAlises: false
  }
}
