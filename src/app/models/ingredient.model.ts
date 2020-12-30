interface IngredientInterface {
  name: string;
  amount: number;
}

export default class Ingredient implements IngredientInterface {
  constructor(public name: string, public amount: number) {}
}
