import { log } from "../index.js";

export const loginController = (req, res, next) => {
  log.info(req);

  if (req.body.userId != "testUser" || req.body.password != "123")
    return res.status(401).send({ auth: false, message: "Wrong Credentials." });

  next();
};
