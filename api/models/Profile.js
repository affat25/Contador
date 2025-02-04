"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {}

  Profile.init(
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          len: [10, 250],
          notEmpty: true,
          unique: true,
        },
      },
      dob: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          notEmpty: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50],
          notEmpty: true,
        },
      },

      monthlyIncome: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
          notEmpty: true,
        },
      },
      aboutMe: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
        },
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );

  Profile.associate = (models) => {
    // associations can be defined here
    models.Profile.belongsTo(models.Login);
  };

  return Profile;
};
