import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const courseDetails = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("CourseDetails");
  var courseID = req.query["id"];
  log.info(req.query);
  collection.findOne({ CourseId: courseID }, function (err, docs) {
    if (err) return res.status(500).send({ message: "Internal Server Error" });

    return res.status(200).send(docs);
  });
};
