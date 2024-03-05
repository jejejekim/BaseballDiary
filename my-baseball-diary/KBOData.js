import React from "react";
import crawlingData from "./KBOData.json";

let data = JSON.parse(JSON.stringify(crawlingData));

export let KBOData = {
  startTime: data.startTime,
  score: data.score,
  team: data.team,
  hitter: data.hitter,
  pitcher: data.pitcher,
};
