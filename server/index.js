import http from "http";
import express from "express";
import cors from "cors";
import bunyan from "bunyan";
import { verifyToken } from "./middlewares/verifyToken.js";
import loginRouter from "./routes/login.js";
import homeRouter from "./routes/home.js";
// import blogRouter from "./routes/blogs.js";
import getuserRouter from "./routes/getuser.js";
// import registerRouter from "./routes/register.js";
import cookieParse from "cookie-parser";
import { body, checkSchema } from "express-validator";
import { validate } from "./middlewares/validatorHandler.js";
import loginSchema from "./models/validationSchemas/loginRequestSchema.js";

import Db from "mongodb";

import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || "4000";
export const log = bunyan.createLogger({ name: "backend server" });
app.set("port", port);

let MongoClient = Db.MongoClient;

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

await client.connect({});
export const CC_DB_OBJ = client.db("CC_DB1");
const collection = client.db("CC_DB1").collection("Student");
log.info("Connected to DB");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParse());

/* Uncomment in deployment */
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials:true,
}
app.use(cors(corsOptions));

app.use("/login", validate(checkSchema(loginSchema)), loginRouter);
app.use("/home", homeRouter);
// app.use("/blogs", blogRouter);
// app.use("/register",registerRouter);

app.use(verifyToken);
// app.use("*", verifyToken, (req, res) => {
//   console.log(req.body.emailId);
//   return res.status(404).json({
//     success: true,
//     message: "API endpoint doesnt exist",
//   });
// });
app.use("/getuser",getuserRouter);

// HTTP Server
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  log.info(`Listening on port:: http://localhost:${port}/`);
});

export default collection;
