import skeleton from "../assets/bg-img-skeleton.svg";

export interface FormState {
  preview: string;
  productName: string;
  productDescription: string;
  price: number;
  tags: string[];
  file: File | null;
}

export const initialFormState: FormState = {
  preview: skeleton,
  productName: "",
  productDescription: "",
  price: 0,
  tags: [],
  file: null,
};
