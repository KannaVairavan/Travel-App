import axios from "axios";
// import net from "follow-redirects";
// import fs from "fs";
// import dotenv from "dotenv";
// require("dotenv").config();

export async function SearchGoat(searchInput) {
  // var JDM_apiKey = "5e9b81867b2afddb58e91a4a7254e19c";
  // var JDM_secret = "3a4f38d0fce3226b2b7a619e4263e22d";

  // var SS_apiKey = "0c486b0c5013662d1dc3c8df39b8b65f";
  // var SS_secret = "5ae29324afb96bdc3d626592ed627fd0";

  var apiKey = "0c486b0c5013662d1dc3c8df39b8b65f";
  var secret = "5ae29324afb96bdc3d626592ed627fd0";


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

export async function SearchGoatByID(id) {
  var apiKey = "0c486b0c5013662d1dc3c8df39b8b65f";
  var secret = "5ae29324afb96bdc3d626592ed627fd0";
  var auth_key = Buffer.from(`${apiKey}:${secret}`).toString("base64");

  return await axios(`https://api.roadgoat.com/api/v2/destinations/${id}`, {
    method: "GET",
    port: 443,
    headers: { Authorization: "Basic " + auth_key },
  });
}

