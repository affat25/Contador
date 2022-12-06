"use strict";
// const { hash } = require("../util/HashingFunctions");

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MicroPost extends Model {
    // noDuplicates(content) {
    //   content.toLowerCase() === str2.toLowerCase();
    // }
  }

  MicroPost.init(
    {
      content: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
        // set(value) {
        //   this.setDataValue("content", hash(value));
        // },
      },
    },
    {
      sequelize,
      modelName: "MicroPost",
    }
  );

  MicroPost.associate = (models) => {
    // associations can be defined here
  };

  return MicroPost;
};
