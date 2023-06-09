import ImgButton from "@/components/features/AddRecipeForm/ImgButton";
import { Step, StepNum, StepText, StepItem, StepAddButton } from "./styled";
interface Step {
  id: number;
  stepDesc: string;
  imgSrc: string | File;
}

interface StepFormProps {
  stepList: Step[];
  handleStepDescriptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
  handleImageUpload: (file: File, index: number) => void;
  removeStep: (id: number) => void;
  addStep: () => void;
}

const StepForm = ({
  stepList,
  handleStepDescriptionChange,
  handleImageUpload,
  removeStep,
  addStep,
}: StepFormProps) => {
  return (
    <Step>
      {stepList.map((step, index) => (
        <StepItem key={step.id}>
          <StepNum>Step{index + 1}</StepNum>
          <StepText
            placeholder="요리방법소개"
            value={step.stepDesc}
            onChange={(e) => handleStepDescriptionChange(e, index)}
          />
          <ImgButton
            onImageUpload={(file) => handleImageUpload(file, index)}
            imgUrl={
              typeof step.imgSrc === "string"
                ? step.imgSrc
                : URL.createObjectURL(step.imgSrc)
            }
          />
          {stepList.length > 1 && (
            <button onClick={() => removeStep(step.id)}>X</button>
          )}
        </StepItem>
      ))}

      <StepAddButton onClick={addStep}>Step 추가</StepAddButton>
    </Step>
  );
};

export default StepForm;
