"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        static associate(db) {
            // define association here
        }
    }
    post.init(
        {
            postId: { primaryKey: true, type: DataTypes.INTEGER },
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            nickname: DataTypes.STRING,
            pw: DataTypes.STRING,
            like: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "post",
        }
    );
    return post;
};
