import axios from "axios";
import net from "follow-redirects";
import fs from "fs";
import dotenv from 'dotenv'
// require("dotenv").config();


var apiKey = "5e9b81867b2afddb58e91a4a7254e19c";
var secret = "3a4f38d0fce3226b2b7a619e4263e22d";
var auth_key = Buffer.from(`${apiKey}:${secret}`).toString("base64");

var options = {
  method: "GET",
  hostname: "api.roadgoat.com",
  port: 443, //If unsecured http:// ... would be set to port 80
  path: "/api/v2/destinations/auto_complete?q=austin",
  headers: {
    Authorization: `Basic ${auth_key}`,
  },
  maxRedirects: 20,
};

var req = net.https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
