import { ChangeEvent, FC, useRef } from "react";
// styled-component로 작성된 컴포넌트를 import
import { Wrapper, AddButton, Thumbnail, HiddenInput } from "./styled";

// 이 컴포넌트가 받는 props의 타입을 정의.
// onFileChange는 File을 인자로 받는 함수, thumbnail은 선택적인 string 타입입니다.
interface ThumbnailUploaderProps {
  onFileChange: (file: File | null) => void;
  thumbnail?: string;
}

const ThumbnailUploader: FC<ThumbnailUploaderProps> = ({
  onFileChange,
  thumbnail,
}) => {
  // input element를 참조하기 위한 ref를 생성합니다.
  const inputRef = useRef<HTMLInputElement>(null);

  // 파일이 변경되었을 때의 이벤트 핸들러 함수입니다.
  // 선택된 파일이 있으면 그 파일을 onFileChange 함수에 전달합니다.
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      onFileChange(file);
    }
  };

  // 클릭 이벤트 핸들러 함수입니다.
  // 이 함수는 Wrapper 컴포넌트가 클릭되었을 때 호출됩니다.
  // 호출되면 hidden 상태인 file input을 클릭하는 것과 같은 효과를 냅니다.
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // 이 컴포넌트가 렌더링하는 JSX입니다.
  // Wrapper 컴포넌트 안에 thumbnail이 있으면 그 이미지를 보여주고,
  // 없으면 'Add Thumbnail' 버튼을 보여줍니다.
  // 또한 hidden 상태인 file input을 렌더링하고,
  // 해당 input의 ref를 위에서 생성한 inputRef로 설정하고,
  // onChange 이벤트 핸들러로 handleFileChange 함수를 설정합니다.
  return (
    <Wrapper onClick={handleClick}>
      {thumbnail ? (
        <Thumbnail src={thumbnail} alt="thumbnail" />
      ) : (
        <AddButton>Add Thumbnail</AddButton>
      )}
      <HiddenInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </Wrapper>
  );
};

// 이 컴포넌트를 export 합니다. 이 컴포넌트는 다른 파일에서 import 하여 사용할 수 있습니다.
export default ThumbnailUploader;
