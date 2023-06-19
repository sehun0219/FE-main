import axios from "axios";

export const uploadRecipe = async (recipeFormData: FormData) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/recipe/add",
      recipeFormData
    );

    console.log("Recipe saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to save the recipe:", error);
    throw error;
  }
};
