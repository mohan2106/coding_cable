import jsonwebtoken from "jsonwebtoken";
import { log } from "../index.js";

// const config_secret = process.env.CONFIG_SECRET;
const config_secret = "sdadsashkkjskufsjldchklakdhkgsdaiukqgyu";
export const verifyToken = async (req, res, next) => {
  log.info(req);
  var token = req.cookies.token || "";
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  try {
    await jsonwebtoken.verify(token, config_secret, (decoded) => {
      //   req.body.userId = decoded.id;
      next();
    });
  } catch (error) {
    log.info(error);
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
};

export const createToken = async (req, res) => {
  try {
    const token = await jsonwebtoken.sign({ id: req.userId }, config_secret, {
      expiresIn: 15 * 60, // expires in 15 mins
    });

    res.cookie("token", token, {
      expires: new Date(Date.now() + 60 * 60),    //expiers in 1 hr
      secure: false,
    });

    return res.status(200).send({ auth: true });
  } catch (error) {
    return res.status(500).send({ auth: false, message: "Failed to Login." });
  }
};
