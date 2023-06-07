import { ChangeEvent } from "react";
import { UploadContainer, ImagePreview, FileInput, UploadText } from "./styled";

interface ImgButtonProps {
  onImageUpload: (file: File) => void;
  imgUrl?: string;
}

const ImgButton = ({ onImageUpload, imgUrl = "" }: ImgButtonProps) => {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && onImageUpload) {
      onImageUpload(file);
    }
  };

  return (
    <UploadContainer>
      {!imgUrl && <UploadText>+ Add Picture</UploadText>}
      <FileInput
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="upLoadButton"
      />
      {imgUrl && <ImagePreview src={imgUrl} alt="Uploaded" />}
    </UploadContainer>
  );
};

export default ImgButton;
