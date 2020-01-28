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
    },
    image: {
      type: DataTypes.STRING
    }
  }, {})
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Blog.hasMany(models.Comment, {
      foreignKey: 'blogId'
    })
  }
  return Blog
}