"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
      itemName: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 250],
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Transaction",
      // [
      //   sequelize.fn("sum", sequelize.col("price")), "totalAssetAmount",
      //  ]
    }
  );

  Transaction.associate = (models) => {
    // associations can be defined here
    models.Transaction.belongsTo(models.MicroPost);
  };

  return Transaction;
};