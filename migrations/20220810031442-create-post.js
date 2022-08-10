"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("posts", {
            postId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.STRING,
            },
            nickname: {
                type: Sequelize.STRING,
            },
            like: {
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("posts");
    },
};
