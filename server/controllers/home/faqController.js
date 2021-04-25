import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const faqAll = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("FAQ");
  collection.find({}).toArray(function (err, docs) {
    if (err) return res.status(500).send({ message: "Internal Server Error" });

    return res.status(200).send({ FAQList: docs });
  });
};

export const faqTop5 = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("FAQ");

  collection
    .find({})
    .limit(5)
    .toArray(function (err, docs) {
      if (err)
        return res.status(500).send({ message: "Internal Server Error" });

      return res.status(200).send({ FAQList: docs });
    });
};
