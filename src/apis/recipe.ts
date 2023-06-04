// api/recipes.js
import axios from "axios";

export const uploadRecipe = async (formData: FormData) => {
  try {
    const response = await axios.post("http://localhost:8080/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Recipe saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to save the recipe:", error);
    throw error;
  }
};
