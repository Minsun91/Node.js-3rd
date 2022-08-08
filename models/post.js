'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.post.belongsTo(models.User, {foreignKey: 'nickname'})
      // define association here
    }
  }
  post.init({
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      required: true,
    },
    title: DataTypes.STRING,
    nickname: DataTypes.STRING,
    content: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};