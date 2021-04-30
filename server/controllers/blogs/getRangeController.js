import { log } from "../index.js";
import { CC_DB_OBJ } from "../index.js";

export const getuserController = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Blogs");
  collection.find({}).toArray(function (err, docs) {
    log.info(docs);
    if (!docs)
      return res
        .status(404)
        .send({ message: "blog not found" });

    return res.status(200).send({ blog:docs });
  });
};
