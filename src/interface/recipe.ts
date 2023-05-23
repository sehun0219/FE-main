export interface User {
  profileImg: string;
  name: string;
  password: string;
  email: string;
}

export interface RecipeData {
  creator: User;
  title: string;
  intro: string;
  video?: string;
  viewCount: number;
}
