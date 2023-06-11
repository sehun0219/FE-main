import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  border: 1px solid blue;
`;

export const Top = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 60px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 120px;
  color: #ffffff;
`;
export const CardWrap = styled.div`
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  overflow: hidden;
`;

export const ThumbNailImg = styled.img`
  width: 100%;
  height: 190px;
  background-color: white;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const ThumbNailDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #23272f;
  color: #ffffff;
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
export const UserId = styled.div`
  font-size: 14px;
  color: #c0c0c0;
`;
export const ViewCount = styled.div`
  font-size: 12px;
  color: orange;
`;
export const UploadTime = styled.div`
  font-size: 12px;
  color: orange;
`;
export const ThumbNailAvatar = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 20px;
  border-radius: 50%;
  background: url("public/png-image_338646.jpeg") no-repeat center/cover;
`;
export const WarpImgAvatarAndDetails = styled.div`
  display: flex;
`;
