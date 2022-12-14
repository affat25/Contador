const express = require("express");
const router = express.Router();
const db = require("../models");
const { Transaction } = db;

// router.get("/", (req, res) => {
//   Transaction.findAll({}).then((allPosts) => res.json(allPosts));
// });

/** Posts to DB */
router.post("/", (req, res) => {
  let { itemName, price, MicroPostId } = req.body;

  Transaction.create({ itemName, price, MicroPostId })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

/** Renders page based on F-key */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Transaction.findAll({
    where: {
      MicroPostId: id,
    },
  }).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   Transaction.findByPk(id).then((mpost) => {
//     if (!mpost) {
//       return res.sendStatus(404);
//     }

//     mpost.content = req.body.content;
//     mpost
//       .save()
//       .then((updatedPost) => {
//         res.json(updatedPost);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
// });

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;