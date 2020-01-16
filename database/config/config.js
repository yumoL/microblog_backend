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
    username: 'baeff011141a50',
    password: 'ced0d695',
    database: 'heroku_53cefc1c015b399',
    host: 'us-cdbr-iron-east-05.cleardb.net',
    dialect: 'mysql',
    operatorsAlises: false
  }
}
