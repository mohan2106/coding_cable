import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const courseCatalog = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("CourseCatalog");
  collection.find({}).toArray(function (err, docs) {
    if (err) return res.status(500).send({ message: "Internal Server Error" });

    return res.status(200).send({ categories: docs });
  });
};
