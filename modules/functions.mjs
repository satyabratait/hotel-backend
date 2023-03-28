import { cardInfo } from "./database/cardInformation.mjs";
import { aboutUs } from "./database/aboutUs.mjs";
import { roomData } from "./database/slider.mjs";

export let topData = () => {
  return JSON.stringify({
    message: "success",
    data: aboutUs,
  });
};

export let cardData = () => {
  return JSON.stringify({
    message: "success",
    data: cardInfo,
  });
};

export let roomsData = () => {
  return JSON.stringify({
    message: "success",
    data: roomData,
  });
};