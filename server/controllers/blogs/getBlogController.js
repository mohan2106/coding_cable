import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const getBlog = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Blogs");
  collection
    .findOne({ _id: req.body.id })
    .project(
      {
        UserName: 1,
        UserImage: 1,
        TitleImage: 1,
        Title: 1,
        Date: 1,
        Content: 1,
        Description: 1,
      },
      function (err, docs) {
        log.info(docs);
        if (!docs) return res.status(404).send({ message: "blog not found" });

        return res.status(200).send({ blog: docs });
      }
    );
};
