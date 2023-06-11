import { CardData } from "@/interface/recipe";
import { useEffect, useState } from "react";
import {
  CardWrap,
  ThumbNailImg,
  ThumbNailDetails,
  RecipeTitle,
  UserId,
  ViewCount,
  ThumbNailAvatar,
  DetailsContent,
  WarpImgAvatarAndDetails,
} from "./styled";

interface RecipeCardProps {
  data: CardData;
}

const RecipeCard = ({ data }: RecipeCardProps) => {
  const [thumbNail, setThumbNail] = useState(data.img || "");
  useEffect(() => {
    setThumbNail(data.img || "");
  }, [data]);

  return (
    <CardWrap>
      <ThumbNailImg src={thumbNail} />
      <WarpImgAvatarAndDetails>
        <ThumbNailDetails>
          <ThumbNailAvatar />
        </ThumbNailDetails>
        <DetailsContent>
          <RecipeTitle>{data.title}</RecipeTitle>
          <UserId>{data.id}</UserId>
          <ViewCount>
            View {data.viewCount} · {data.date}
          </ViewCount>
        </DetailsContent>
      </WarpImgAvatarAndDetails>
    </CardWrap>
  );
};

export default RecipeCard;
