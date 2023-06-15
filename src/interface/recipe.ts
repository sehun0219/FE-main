export interface User {
  avatarImg: string;
  name: string;
  password: string;
  email: string;
}

export interface RecipeData {
  mainImg: string;
  title: string;
  category: string;
  description: string;
  cookingInfo: {
    servingSize: string;
    cookingTime: string;
    difficulty: string;
    type: string;
  };
  coreItems: Array<{ itemName: string }>;
  ingredient: Array<{
    name: string;
    quantity: string;
  }>;
  completedImg: Array<{
    compImg: string;
  }>;

  cookingStep: Array<{
    stepNum: number;
    stepDesc: string;
    stepImg: string;
  }>;
  creator: {
    avatarImg: string;
    name: string;
  };
}

export interface CardData {
  thumbNailImg: string;
  title: string;
  id: string;
  viewCount: number;
  date: string;
  avatarImg: string;
}
