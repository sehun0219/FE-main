import RecipeCard from "../RecipeCard";

import {
  Container,
  Top,
  MainBody,
  PageNationWrap,
  PageNation,
  PageNationButton,
} from "./styled";
import { CardData } from "@/interface/recipe";

const Main = () => {
  const dummyData: CardData[] = [
    {
      img: "public/indianFood-image_127425-18.avif",
      title: "Indian style chicken",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/bibimbab.jpeg",
      title: "Korean Bibimbap that's easy to follow",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/bugers.jpeg",
      title: "New York Style Homemade Shake Shack Burger",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/panCake.jpeg",
      title: "Pancake that my dad made for me every Sunday",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/pork.webp",
      title:
        "A must-win date recipe! Homemade salmon steak with a restaurant vibe",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/salad.jpeg",
      title: "Salad Recipe of Memories",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/cheeseBuger.avif",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "public/cake.jpeg",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
  ];

  return (
    <Container>
      <Top>{10}개의 레시피가 있습니다.</Top>
      <MainBody>
        {dummyData
          .filter((_, i) => i < 8)
          .map((item, i) => (
            <RecipeCard key={i} data={item} />
          ))}
      </MainBody>
      <PageNationWrap>
        <PageNation>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">"].map((i) => (
            <PageNationButton>{i}</PageNationButton>
          ))}
        </PageNation>
      </PageNationWrap>
    </Container>
  );
};

export default Main;
