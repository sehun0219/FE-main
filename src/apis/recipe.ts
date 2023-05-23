import axios from "axios";
import { RecipeData } from "@/interface/recipe";
export const postAddRecipe = async (recipeData: RecipeData) => {
  try {
    await axios.post("http://localhost:8080/recipe/add", recipeData);
  } catch (error) {
    return null;
  }
};
