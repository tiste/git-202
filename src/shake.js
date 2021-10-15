import terminalImage from "terminal-image";

export async function shake(recipe) {
  console.log(await terminalImage.file(recipe.pop().path));
}
