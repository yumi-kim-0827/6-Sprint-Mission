import React from "react";
import TextArea from "../inputs/TextArea";
import InputText from "../inputs/InputText";
import FileUpload from "../inputs/FileUpload";

const InputWrapper = (props) => {
  const { inputs } = props;

  return inputs?.map((input, idx) => {
    const { type = "text", name } = input;

    if (type === "textarea") {
      return <TextArea key={name + idx} {...input} />;
    } else if (type === "file") {
      return <FileUpload key={name + idx} {...input} />;
    } else {
      return <InputText key={name + idx} {...input} />;
    }
  });
};

export default InputWrapper;
