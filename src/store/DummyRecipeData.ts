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
      { name: "handled chicken", quantity: "850 g" },
      { name: "Bread powder", quantity: "3 tablespoons" },
      { name: "Red pepper powder", quantity: "1 tablespoons" },
      { name: "Minced red pepper", quantity: "2 EA" },
      { name: "Fried powder", quantity: "2 tablespoons" },
      { name: "Curry powder", quantity: "3 tablespoons" },
      { name: "Parsley", quantity: "1 tablespoons" },
      { name: "Cheese powder", quantity: "a little" },
    ],
    cookingStep: [
      {
        stepNum: 1,
        stepDesc:
          "Please wash the chicken well and organize it so that it's easy to eat",
        stepImg: "public/StepImg/step1.png",
      },
      {
        stepNum: 2,
        stepDesc: "Add pepper, milk, salt to basic seasoning",
        stepImg: "public/StepImg/step2.png",
      },
      {
        stepNum: 3,
        stepDesc:
          "Mix the seasoning in the ratio of soy sauce 2, sugar 3, garlic 1, and curry powder 2",
        stepImg: "public/StepImg/step3.png",
      },
      {
        stepNum: 4,
        stepDesc:
          "When you're done making the sauce, add the frying powder to the chicken you've been soaking in milk.",
        stepImg: "public/StepImg/step4.png",
      },
      {
        stepNum: 5,
        stepDesc:
          "Put it in a plastic bag and make sure the seasoning is mixed evenly",
        stepImg: "public/StepImg/step5.png",
      },
      {
        stepNum: 6,
        stepDesc: "Fry in oil",
        stepImg: "public/StepImg/step6.png",
      },
      {
        stepNum: 7,
        stepDesc: "Fry in oil for about 20 minutes and take out",
        stepImg: "public/StepImg/step7.png",
      },
      {
        stepNum: 8,
        stepDesc: "Mix the fried chicken with the sauce",
        stepImg: "public/StepImg/step8.png",
      },
    ],
    completedImg: [
      { compImg: "public/CompImg/comp1.png" },
      { compImg: "public/CompImg/comp2.png" },
      { compImg: "public/CompImg/comp3.png" },
      { compImg: "public/CompImg/comp4.png" },
    ],
    creator: {
      avatarImg: "public/Avatar/avatar1.avif",
      name: "Cayde",
    },
  },
];

export default DummyRecipeData;
