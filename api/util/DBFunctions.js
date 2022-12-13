const { Goal, Login, MicroPost, Profile, Transaction, sequelize } = require("../models");

// Sum each categories' transactions
async function sumAllTransactions() {
  let totalAmount = await Transaction.findAll({
    attributes: ["MicroPostId", [sequelize.fn("SUM", sequelize.col("price")), "totalCategorySpend"]],
    group: ["MicroPostId"],
  });
  return totalAmount;
}

module.exports = {
  sumAllTransactions,
};

/**

router.get("/", (req, res) => {
  // Make query to transactions here. Create hash table to store id's to sums. Do this first
  MicroPost.findAll({}).then(async (allPosts) => {
    let sums = await sumAllTransactions();
    //console.log(sums[1].totalCategorySpend); // This is undefined
    sums.map((e) => {
      // findAll & getDataValue are sequelize functions
      console.log(e.MicroPostId, e.getDataValue("totalCategorySpend")); // totalCategorySpend is an AS so we need this function
    });

    //Take allPost and iterate forEach post query. the sum that exist in hash and include it into the res.json

    console.log(allPosts);
    res.json(allPosts);
  });
});


router.get("/", (req, res) => {
  MicroPost.findAll({}).then(async (allPosts) => {
    const map = new Map();
    let sums = await sumAllTransactions();
    sums.map((e) => {
      map.set(e.MicroPostId, e.getDataValue("totalCategorySpend"));
    });

    allPosts.forEach((e) => {
      e.setDataValue("totalCategorySpend", map.get(e.id));
    });

    res.json(allPosts);
  });
});
 */
