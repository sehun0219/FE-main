import styled from "styled-components";

export const Container = styled.div`
  width: 1240px;
  height: max-content;
  background-color: #ffffff;
  padding: 32px;
`;

export const FirstSectionInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 24px;
`;

export const ImgButton = styled.button`
  width: 250px;
  height: 250px;
  background-color: #6969b3;
  background: url(https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg)
    no-repeat;
  background-size: 40%;
  background-position: center;
  color: #6969b3;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #999999;
  padding-bottom: 32px;
`;

export const SecondSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-bottom: 32px;
`;
