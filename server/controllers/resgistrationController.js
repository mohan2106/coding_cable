import { log } from "../index.js";

export const resgistrationController = (req, res) => {
  let MongoClient = Db.MongoClient;
  const uri =
    "mongodb+srv://backendAPI:testpassword123@cluster0.cf7sn.mongodb.net/CC_DB1?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((err) => {
    if (err) {
      client.close();
      log.info(err);
      return res.status(401).send({ message: "Error." });
    }
    const collection = client.db("CC_DB1").collection("Student");
    // perform actions on the collection object

    collection.findOne({ EmailId: req.body.EmailId }, function (err, docs) {
      if (docs) {
        client.close();
        return res.status(401).send({ message: "User Exists Already." });
      }
      collection.insertOne(req.body, function (err, res) {
        client.close();
        if (err) {
          log.info(err);
          return res.status(401).send({ message: "Error." });
        }
        return res.status(200).send({ message: "User added sucessfully" });

        //   console.log("1 document inserted");
      });
    });
  });
};
