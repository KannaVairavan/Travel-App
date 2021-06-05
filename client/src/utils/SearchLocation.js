import axios from "axios";
// import net from "follow-redirects";
// import fs from "fs";
// import dotenv from "dotenv";
// require("dotenv").config();

export async function SearchGoat(searchInput) {
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

export async function SearchGoatByID(id) {
  var apiKey = "5e9b81867b2afddb58e91a4a7254e19c";
  var secret = "3a4f38d0fce3226b2b7a619e4263e22d";
  var auth_key = Buffer.from(`${apiKey}:${secret}`).toString("base64");

  return await axios(`https://api.roadgoat.com/api/v2/destinations/${id}`, {
    method: "GET",
    port: 443,
    headers: { Authorization: "Basic " + auth_key },
  });
}

// export async function SearchGoat(searchInput) {
//   var apiKey = "5e9b81867b2afddb58e91a4a7254e19c";
//   var secret = "3a4f38d0fce3226b2b7a619e4263e22d";
//   var auth_key = Buffer.from(`${apiKey}:${secret}`).toString("base64");

//   await axios(
//     `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${searchInput}`,
//     {
//       method: "GET",
//       port: 443,
//       headers: { Authorization: "Basic " + auth_key },
//     }
//   ).then((res) => {
//     const resultsObject = [];
//     const detailedResponse = [];
//     res.data.data.map((item, index) => {
//       const id = index;
//       const city_id = item.id;
//       const image_info = {
//         image_src_id: item.relationships.featured_photo.data || null,
//         img_src: null,
//       };
//       const cityName = item.attributes.name;
//       const coords = {
//         lat: item.attributes.latitude,
//         lon: item.attributes.longitude,
//       };
//       resultsObject.push({ id, cityName, coords, city_id, image_info });
//     });
//     for (let i = 0; i < res.data.included.length; i++) {
//       if (i > resultsObject.length - 1) {
//         continue;
//       }
//       let image_url = res.data.included[i].attributes.image
//         ? res.data.included[i].attributes.image.thumb
//         : "https://via.placeholder.com/150.png"; //enter google serch if no image;
//       resultsObject[i].image_info.img_src = image_url;
//     }
//     resultsObject.forEach(async (item) => {
//       await SearchGoatByID(item.city_id).then(async (res, index) => {
//         if (res.data.data.id === item.city_id) {
//           item["details"] = {
//             data: res.data.data,
//             includes: res.data.included,
//           };
//         }
//       });
//       setHolder(resultsObject);
//       setDetails(detailedResponse);
//     });
//     console.log("Current Results: ", resultsObject);
//     console.log("Detailed Responses: ", detailedResponse);
//   });
// }

// }
