interface RecipeInterface {
  name: string;
  description: string;
  imagePath: string;
}

export default class Recipe implements RecipeInterface {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
