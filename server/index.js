import http from "http";
import express from "express";
import cors from "cors";
import bunyan from "bunyan";
import { verifyToken } from "./middlewares/verifyToken.js";
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import cookieParse from "cookie-parser";

const app = express();
const port = process.env.PORT || "4000";
export const log = bunyan.createLogger({ name: "backend server" });
app.set("port", port);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParse());

/* Uncomment in deployment */
// app.use(cors);

app.use("/login", loginRouter);
app.use("/register",registerRouter);

app.use("*", verifyToken, (req, res) => {
  return res.status(404).json({
    success: true,
    message: "API endpoint doesnt exist",
  });
});

// HTTP Server
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  log.info(`Listening on port:: http://localhost:${port}/`);
});
