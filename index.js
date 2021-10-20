import { Glass } from "./src/glass.js";
import { shake } from "./src/shake.js";
import { Whisky } from "./src/whisky.js";
import { Sugar } from "./src/sugar.js";

async function makeIrish() {
  const recipe = [
    new Glass(),
    new Whisky(),
    new Sugar(),
  ];

  await shake(recipe);
}

makeIrish();
