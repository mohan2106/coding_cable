import { log } from "../index.js";
import bcrypt from "bcrypt";
import { CC_DB_OBJ } from "../index.js";

export const loginController = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Student");
  collection.findOne({ Email: req.body.emailId }, function (err, docs) {
    log.info(docs);
    if (!docs)
      return res
        .status(401)
        .send({ auth: false, message: "Wrong Credentials." });
    bcrypt.compare(
      req.body.password,
      docs.Hashed_Password,
      function (err, res1) {
        if (res1 == false) {
          return res
            .status(401)
            .send({ auth: false, message: "Wrong Credentials." });
        }

        // Now we can store the password hash in db.
        let User = { emailId: docs.Email, name: docs.Name };

        req.body.user = User;
        next();
      }
    );
  });
};

/* Prev Code */

// log.info(MongoClient);

// let MongoClient = Db.MongoClient;
// const uri =
//   "mongodb+srv://backendAPI:testpassword123@cluster0.cf7sn.mongodb.net/CC_DB1?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
// var myobj = { name: "Company Inc", address: "Highway 37" };

// const collection = client.db("CC_DB1").collection("Student");
// perform actions on the collection object

// collection.insertOne(myobj, function(err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
// });
