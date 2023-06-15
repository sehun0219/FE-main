import { RecipeData } from "@/interface/recipe";

const DummyRecipeData: RecipeData[] = [
  {
    mainImg: "public/food/indianFood-image_127425-18.avif",
    title: "Indian style chicken",
    category: "Main dish",
    description:
      "It's a dish that my Indian flatmate invited me to his house and made for me, and it was so delicious that I asked for a recipe and made it by myself!!!",
    cookingInfo: {
      servingSize: "For two",
      cookingTime: "40 min",
      difficulty: "Normal",
      type: "Main-Dish",
    },
    coreItems: [
      { itemName: "Chicken" },
      { itemName: "Frying powder" },
      { itemName: "Curry powder" },
    ],
    ingredient: [
      { name: "조각난 치킨", quantity: "850g" },
      { name: "빵가루", quantity: "3큰술" },
      { name: "고춧가루", quantity: "1큰술" },
      { name: "다진 청양고추", quantity: "2개" },
      { name: "튀김가루", quantity: "2큰술" },
      { name: "카레가루", quantity: "3큰술" },
      { name: "파슬리", quantity: "1큰술" },
      { name: "치즈가루", quantity: "조금" },
    ],
    cookingStep: [
      {
        stepNum: 1,
        stepDesc:
          "비닐봉지에요. 오늘 치킨 만들기 재료 중에서 이녀석이 일등공신이라고 할 수 있죠.",
        stepImg: "public/StepImg/step1.jpeg",
      },
      {
        stepNum: 2,
        stepDesc: "닭봉, 닭날개 850g을 준비했어요.",
        stepImg: "public/StepImg/step2.jpeg",
      },
      {
        stepNum: 3,
        stepDesc:
          "양념은 간장2, 설탕3, 마늘1, 커리가루2 의 비율로 섞어서 만들어주세요.",
        stepImg: "public/StepImg/step3.jpeg",
      },
      {
        stepNum: 4,
        stepDesc: "모든 재료와 함께 물 두컵을 넣고 치킨을 냄비에서 끓여주세요",
        stepImg: "public/StepImg/step4.jpeg",
      },
    ],
    completedImg: [
      { compImg: "public/CompImg/comp1.png" },
      { compImg: "public/CompImg/comp2.png" },
      { compImg: "public/CompImg/comp3.png" },
    ],
    creator: {
      avatarImg: "public/Avatar/avatar1.avif",
      name: "Cayde",
    },
  },
];

export default DummyRecipeData;