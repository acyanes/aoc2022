import * as fs from "fs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("day1.txt"),
});

let elves: Array<number> = [];
let calories = 0;

rl.on("line", (line) => {
  if (line.length > 0) {
    calories += parseInt(line);
  } else {
    elves.push(calories);
    calories = 0;
  }
});

rl.on("close", () => {
  elves.sort((a, b) => {
    return a - b;
  });
  console.log(elves.at(-1));
});
