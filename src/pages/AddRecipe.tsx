import styled from "styled-components";
import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import RecipeForm from "@/components/features/AddRecipeForm";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AddRecipe = () => {
  return (
    <BaseLayout>
      <header>
        <Navbar />
      </header>
      <MainContainer>
        <RecipeForm />
      </MainContainer>
    </BaseLayout>
  );
};
export default AddRecipe;
