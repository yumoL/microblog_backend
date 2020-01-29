'use strict'
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {})
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Blog.hasMany(models.Comment, {
      foreignKey: 'blogId'
    })
    Blog.hasMany(models.Image, {
      foreignKey: 'blogId',
      as: 'images'
    })
  }
  return Blog
}