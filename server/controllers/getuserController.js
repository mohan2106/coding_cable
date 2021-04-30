import { log } from "../index.js";
import { CC_DB_OBJ } from "../index.js";

export const getuserController = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Student");
  collection.findOne({ Email: req.body.emailId }, function (err, docs) {
    log.info(docs);
    if (!docs)
      return res
        .status(401)
        .send({ auth: false, message: "Wrong Credentials." });

    let User = { emailId: docs.Email, name: docs.Name };

    return res.status(200).send({ auth: true, user:User });
  });
};
