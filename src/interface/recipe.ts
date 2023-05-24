export interface User {
  profileImg: string;
  name: string;
  password: string;
  email: string;
}

export interface RecipeData {
  imgSrc?: string;
  creator: User;
  title: string;
  intro: string;
  viewCount: number;
}
