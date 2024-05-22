import {
  FormInputMain,
  TextareaInput,
  NumberInput,
  TagInput,
} from "./FormInputs";
import ImageInput from "./ImageInput";

export const FormInput = Object.assign(FormInputMain, {
  Number: NumberInput,
  Textarea: TextareaInput,
  Tag: TagInput,
  Image: ImageInput,
});
