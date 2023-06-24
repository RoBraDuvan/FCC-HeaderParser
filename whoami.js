const express = require("express");
//require("dotenv").config();

let app = express();
let arrayWhoiam = {};

app.enable("trust proxy");

app.get('/whoami', (req, res)=>{
  const { ip } = req;
  const lenguaje = req.get("Accept-Language");
  const software = req.get("User-Agent");
  
  arrayWhoiam["ipadress"] = ip;
  arrayWhoiam["language"] = lenguaje;
  arrayWhoiam["software"] = software;

  res.json(arrayWhoiam);
});


module.exports.whoiam = app;