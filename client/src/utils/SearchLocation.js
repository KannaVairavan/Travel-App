import axios from "axios";
// import net from "follow-redirects";
// import fs from "fs";
// import dotenv from "dotenv";
// require("dotenv").config();

async function SearchGoat(searchInput) {
  var apiKey = "5e9b81867b2afddb58e91a4a7254e19c";
  var secret = "3a4f38d0fce3226b2b7a619e4263e22d";
  var auth_key = Buffer.from(`${apiKey}:${secret}`).toString("base64");

  return await axios(
    `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${searchInput}`,
    {
      method: "GET",
      port: 443,
      headers: { Authorization: "Basic " + auth_key },
    }
  );
}

export default SearchGoat;
