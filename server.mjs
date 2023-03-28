import http from "http";
import * as data from "./modules/functions.mjs";

http.createServer(function (req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header", "*");
    if (req.url === "/top") {
      res.end(data.topData());
    }
   else if (req.url === "/card") {
      res.end(data.cardData());
    } 
    else if (req.url==="/slider"){
      res.end(data.roomsData())
    }
    else {
      res.end(
        JSON.stringify({
          success: false,
          message: "Data not Found",
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
}).listen(8080);

console.log("It's running at http://127.0.0.1:8080");