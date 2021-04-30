import { log } from "../../index.js";
import { CC_DB_OBJ } from "../../index.js";

export const getRange = (req, res, next) => {
  const collection = CC_DB_OBJ.collection("Blogs");
  collection.find({}).project({_id:1,Title:1,TitleImageLink:1,Description:1,UserName:1,TimeStamp:1}).toArray(function (err, docs) {
      let l = req.body.st;
      let r = req.body.end;
    //   console.log(docs.splice(l,r-l+1));

    return res.status(200).send({ BlogList:docs.splice(l,r-l+1) });
  });
};
