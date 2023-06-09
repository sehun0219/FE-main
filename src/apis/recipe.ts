// api/recipes.js
import axios from "axios";

// export const uploadRecipe = async (data: any) => {
//   try {
//     const response = await axios.post("http://localhost:8080/recipe/add", data);
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

export const uploadRecipeImages = async (formData: FormData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/recipe/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Recipe saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to save the recipe:", error);
    throw error;
  }
};
