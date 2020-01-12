'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: DataTypes.STRING
  }, {})
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}