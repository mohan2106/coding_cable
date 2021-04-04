import { log } from "../index.js";
import bcrypt from "bcrypt";

import Db from "mongodb";
export const loginController = (req, res, next) => {
  // log.info(MongoClient);

  let MongoClient = Db.MongoClient;
  const uri =
    "mongodb+srv://backendAPI:testpassword123@cluster0.cf7sn.mongodb.net/CC_DB1?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((err) => {
    var myobj = { name: "Company Inc", address: "Highway 37" };

    const collection = client.db("CC_DB1").collection("Student");
    // perform actions on the collection object

    // collection.insertOne(myobj, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    // });
    collection.findOne({ Name: req.body.emailId }, function (err, docs) {
      console.log(docs);
      bcrypt.compare(
        req.body.password,
        docs.Hashed_Password,
        function (err, res1) {
          if (res1 == false) {
            client.close();
            return res
              .status(401)
              .send({ auth: false, message: "Wrong Credentials." });
          }

          client.close();
          // Now we can store the password hash in db.
          next();
        }
      );
    });

    // // Execute the each command, triggers for each document
    //   // If the item is null then the cursor is exhausted/empty and closed

    //   // otherwise, do something with the item
  });
};
