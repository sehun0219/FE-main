import ImgButton from "@/components/features/AddRecipeForm/FirstSection/ImgButton";

interface Step {
  id: number;
  stepDesc: string;
  imgSrc: string;
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
    <div>
      {stepList.map((step, index) => (
        <div key={step.id}>
          <p>Step{index + 1}</p>
          <textarea
            placeholder="요리방법소개"
            value={step.stepDesc}
            onChange={(e) => handleStepDescriptionChange(e, index)}
          />
          <ImgButton
            onImageUpload={(file) => handleImageUpload(file, index)}
            imgUrl={step.imgSrc}
          />
          {stepList.length > 1 && (
            <button onClick={() => removeStep(step.id)}>X</button>
          )}
        </div>
      ))}

      <button onClick={addStep}>Step 추가</button>
    </div>
  );
};

export default StepForm;
