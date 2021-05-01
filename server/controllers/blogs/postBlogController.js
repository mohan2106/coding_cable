import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const postBlog = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Student");
  const collection2= CC_DB_OBJ.collection("Blogs");

  var creationTimeStamp = Date.now();
  collection.findOne({ Email: req.body.emailId }, function (err, user) {
    log.info(user);
    if (!user)
      return res
        .status(401)
        .send({ auth: false, message: "Wrong Credentials." });

    const doc = {
      Title: req.body.Title,
      TitleImage: req.body.TitleImage,
      Description: req.body.Description,
      UserEmailID: req.body.emailId, //Added to req in verify token
      UserName: user.Name,
      Content: req.body.Content,
      TimeStamp: creationTimeStamp,
      TextLength: req.body.Content.length,
    };

    collection2.insertOne(doc, function (err, result) {
      if (err) return res.status(500).send({ message: "Internal ServerError" });

      return res.status(200).send({ message: "Blog added Successfully" });
    });
  });
};
