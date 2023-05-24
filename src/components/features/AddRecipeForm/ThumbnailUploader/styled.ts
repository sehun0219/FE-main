import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px dashed #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px dashed #aaa;
  color: #aaa;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HiddenInput = styled.input`
  display: none;
`;

export { Wrapper, AddButton, Thumbnail, HiddenInput };
