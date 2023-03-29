import http from "http";
import  url  from "url";
import { parse } from "querystring";
import * as data from "./modules/functions.mjs";
import { roomData } from "./modules/database/slider.mjs";


function routes(req){
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  if (path === "/top") {
    console.log(data.topData);
    return data.topData();
  }
 else if (path === "/card") {
    console.log(data.cardData());
    return data.cardData();
  } 
  else if (path === "/slider"){
    console.log(data.roomsData());
    return data.roomsData();
  }
}

http.createServer(function (req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.writeHead(200, {"Content-Type" : "application/json"});
    let chunks = "";
    req.on("data",(chunk) => {
      chunks = chunk.toString();
    });

    req.on("end",()=>{
      let parsedData = parse(chunks);
      console.log(parsedData);
      if (Object.keys(parsedData).length !== 0) {
        data.addRoomData(parsedData);
      }
    });
    
    res.end(routes(req));
  } catch (err) {
    console.log(err);
  }
}).listen(8080);

console.log("It's running at http://127.0.0.1:8080");