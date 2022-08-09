"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      commentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postId: {
        type: Sequelize.STRING,
      },
<<<<<<<< HEAD:migrations/20220809025014-create-post.js
      content: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.INTEGER
========
      nickname: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
>>>>>>>> 42c1444ba64d6aa0390aeac54da6202e99418487:migrations/20220809012737-create-comment.js
      },
      userId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable("Comments");
  },
};
