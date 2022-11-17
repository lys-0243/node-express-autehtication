const express = require("express");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const { cours } = require("./data");
const session = require('express-session');
require('dotenv').config();

const app = express();

app.engine("html", ejs.__express);

app.use(session({
  name: process.env.SESSION_NAME,
  resave : false,
  saveUninitialized : false,
  secret : process.env.SESSION_SECRET,
  cookie : {
    maxAge : 1000 * 60 * 60 * 24,
    secure : false,
  }
}))
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  console.log(req.session);
  res.render("index", { cours });
});
app.get("/connexion", (req, res) => {
  res.render("connexion");
});
app.get("/inscription", (req, res) => {
  res.render("inscription");
});

app.get("/lectureVideo", (req, res) => {
  if(req.session.idUtilisateur){
    res.render("lectureVideo");
  } 
  res.render("connexion");
  
});

app.get("/video", (req, res) => {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Require Range header");
  }
  const videoPath = "public/videos/drcmind_intro.mp4";
  const videoSize = fs.statSync("public/videos/drcmind_intro.mp4").size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": "bytes " + start + "-" + end + "/" + videoSize,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

app.listen(4001);
console.log("L'application tourne au port 4001");
