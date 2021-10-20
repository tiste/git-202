import { Glass } from "./src/glass.js";
import { shake } from "./src/shake.js";

async function makeIrish() {
  const recipe = [
    new Glass(),
  ];

  await shake(recipe);
}

makeIrish();
