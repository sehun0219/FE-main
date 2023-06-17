import styled from "styled-components";

export const UploadContainer = styled.div`
  border: 1px solid red;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 4px;
`;
export const UploadText = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
  z-index: 1;
  pointer-events: none;
`;
export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
