import terminalImage from "terminal-image";

export async function shake(recipe) {
  const ingredientsWithImage = recipe.filter(ingredient => ingredient.path)

  console.log(await terminalImage.file(ingredientsWithImage.pop().path));
}
