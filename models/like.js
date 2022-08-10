"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class like extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(db) {
            db.like.belongsTo(db.User, { foreignKey: "userId" });
            db.like.belongsTo(db.post, { foreignKey: "postId" });
        }
    }
    like.init(
        {
            likeId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            postId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "like",
        }
    );
    return like;
};
