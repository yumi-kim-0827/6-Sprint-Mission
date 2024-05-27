import {
  FormInputMain,
  TextareaInput,
  NumberInput,
  TagInput,
  PasswordInput,
  EmailInput,
} from "./FormInputs";
import ImageInput from "./ImageInput";

const FormInput = Object.assign(FormInputMain, {
  Email: EmailInput,
  PW: PasswordInput,
  Number: NumberInput,
  Textarea: TextareaInput,
  Tag: TagInput,
  Image: ImageInput,
});

export default FormInput;
