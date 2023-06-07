import AddButton from "@/components/common/AddButton";
import {
  IngredientWarp,
  IngredientInput,
  IngredientAddButton,
  IngredientRow,
} from "./styled";
interface Ingredient {
  ingredient: string;
  quantity: string;
}

interface IngredientFormProps {
  ingredientList: Ingredient[];
  onIngredientList: (newIngredientList: Ingredient[]) => void;
}

const IngredientForm = ({
  ingredientList,
  onIngredientList,
}: IngredientFormProps) => {
  return (
    <IngredientWarp>
      {ingredientList.map((ingredient, index) => {
        return (
          <IngredientRow>
            <div>
              <IngredientInput
                placeholder="eg. Tomato"
                value={ingredient.ingredient}
                onChange={(e) => {
                  const newIngredientList = [...ingredientList];
                  newIngredientList[index].ingredient = e.target.value;
                  onIngredientList(newIngredientList);
                }}
              />

              <IngredientInput
                placeholder="eg. 2 EA"
                value={ingredient.quantity}
                onChange={(e) => {
                  const newIngredientList = [...ingredientList];
                  newIngredientList[index].quantity = e.target.value;
                  onIngredientList(newIngredientList);
                }}
              />

              {ingredientList.length > 1 && (
                <IngredientAddButton
                  onClick={() => {
                    onIngredientList(
                      ingredientList.filter((_, i) => i !== index)
                    );
                  }}
                >
                  x
                </IngredientAddButton>
              )}
            </div>
          </IngredientRow>
        );
      })}
      <AddButton
        onClick={() => {
          onIngredientList([
            ...ingredientList,
            {
              ingredient: "",
              quantity: "",
            },
          ]);
        }}
      >
        재료추가
      </AddButton>
    </IngredientWarp>
  );
};

export default IngredientForm;
