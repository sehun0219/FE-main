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
  const [thumbNail, setThumbNail] = useState(data.thumbNailImg || "");
  useEffect(() => {
    setThumbNail(data.thumbNailImg || "");
  }, [data]);
  const [avatarImg, setAvatarImg] = useState(data.avatarImg);
  useEffect(() => {
    setAvatarImg(data.avatarImg || "");
  }, [data]);

  return (
    <CardWrap>
      <ThumbNailImg src={thumbNail} />
      <WarpImgAvatarAndDetails>
        <ThumbNailDetails>
          <ThumbNailAvatar src={avatarImg} />
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
