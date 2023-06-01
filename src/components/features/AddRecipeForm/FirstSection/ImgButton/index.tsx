import { ChangeEvent } from "react";

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
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="upLoadButton"
      />
      {imgUrl && <img src={imgUrl} alt="" />}
    </div>
  );
};

export default ImgButton;
