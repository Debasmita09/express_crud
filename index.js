const express = require("express");                      
require("dotenv").config();
let session = require("express-session");
let host_name = process.env.HOST_URL;
const app = express();
const port = process.env.DEFAULT_PORT;
let server = require("http").createServer(app);
let cors = require("cors");
server.listen(port, "127.0.0.1", () => {
  console.log(`server listening on port: ${port}`);
});
app.set("port", port);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("views"));
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,auth"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.get("/", (req, res) => {
  res.redirect(base_url + "login");
});
try {
    let api_routs = require('./routs/api_routes')
    app.use('/',api_routs)
} catch (error) {
    console.log('error',error);
}
global.base_url = host_name;