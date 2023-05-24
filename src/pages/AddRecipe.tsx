import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import RecipeForm from "@/components/features/AddRecipeForm";
const AddRecipe = () => {
  return (
    <BaseLayout>
      <header>
        <Navbar />
      </header>
      <main>
        <RecipeForm />
      </main>
    </BaseLayout>
  );
};
export default AddRecipe;
