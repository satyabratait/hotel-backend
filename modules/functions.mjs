import { cardInfo } from "./database/cardInformation.mjs";
import { aboutUs } from "./database/aboutUs.mjs";
import { roomData } from "./database/slider.mjs";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);

const dirName = path.dirname(fileName);
let filePath = "./database/roomData.txt";

export function topData() {
  return JSON.stringify({
    message: "success",
    data: aboutUs,
  });
}

export function cardData() {
  return JSON.stringify({
    message: "success",
    data: cardInfo,
  });
}

export function roomsData() {
  return JSON.stringify({
    message: "success",
    data: roomData,
  });
}

export async function addRoomData(data) {
  let readFileData = await fs.readFile(
    path.resolve(dirName, filePath),
    "utf-8"
  );
  readFileData = JSON.parse(readFileData);
  readFileData.push(data);
  await fs.writeFile(
    path.resolve(dirName, filePath),
    JSON.stringify(readFileData)
  );
}
