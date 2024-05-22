import {
  FormInputMain,
  TextareaInput,
  NumberInput,
  TagInput,
} from "./FormInputs";
import ImageInput from "./ImageInput";

const FormInput = Object.assign(FormInputMain, {
  Number: NumberInput,
  Textarea: TextareaInput,
  Tag: TagInput,
  Image: ImageInput,
});

export default FormInput;
