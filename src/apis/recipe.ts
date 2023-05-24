import axios from "axios";
import { RecipeData } from "@/interface/recipe";
export const postAddRecipe = async (recipeData: RecipeData) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/recipe/add",
      recipeData
    );
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};
