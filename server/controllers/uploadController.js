import { log } from "../index.js";
import {storageRef} from "../index.js";
export const uploadImageController = (req, res) => {
  
    console.log('Upload Image');

    let file = req.file;
    console.log(file);
    storageRef.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot);
      });
      


    return res.status(200).send({ });
};
