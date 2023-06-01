import AddButton from "@/components/common/AddButton";

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
    <div>
      {ingredientList.map((ingredient, index) => {
        return (
          <div>
            <input
              placeholder="재료"
              value={ingredient.ingredient}
              onChange={(e) => {
                const newIngredientList = [...ingredientList];
                newIngredientList[index].ingredient = e.target.value;
                onIngredientList(newIngredientList);
              }}
            />
            <input
              placeholder="양"
              value={ingredient.quantity}
              onChange={(e) => {
                const newIngredientList = [...ingredientList];
                newIngredientList[index].quantity = e.target.value;
                onIngredientList(newIngredientList);
              }}
            />
            {ingredientList.length > 1 && (
              <button
                onClick={() => {
                  onIngredientList(
                    ingredientList.filter((_, i) => i !== index)
                  );
                }}
              >
                지우기
              </button>
            )}
          </div>
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
    </div>
  );
};

export default IngredientForm;
