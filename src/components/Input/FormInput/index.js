import {
  FormInputMain,
  FormTextarea,
  NumberInput,
  TagInput,
} from "./FormInputs";
import ImageInput from "./ImageInput";

export const FormInput = Object.assign(FormInputMain, {
  Number: NumberInput,
  Textarea: FormTextarea,
  Tag: TagInput,
  Image: ImageInput,
});
