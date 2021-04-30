import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const postBlog = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Blogs");

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
      UserImage: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      Content: req.body.Content,
      TimeStamp: creationTimeStamp,
      TextLength: req.body.Content.length,
    };

    collection.insertOne(doc, function (err, result) {
      if (err) return res.status(500).send({ message: "Internal ServerError" });

      return res.status(200).send({ message: "Blog added Successfully" });
    });
  });
};
