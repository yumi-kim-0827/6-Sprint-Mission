import React from "react";
import TextArea from "../inputs/TextArea";
import InputText from "../inputs/InputText";
import FileUpload from "../inputs/FileUpload";
import TagInputText from "../inputs/TagInputText";

const InputWrapper = (props) => {
  const { inputs, onChange } = props;

  return inputs?.map((input, idx) => {
    const { type = "text", name } = input;

    if (type === "textarea") {
      return <TextArea key={name + idx} {...input} onChange={onChange} />;
    } else if (type === "file") {
      return <FileUpload key={name + idx} {...input} onChange={onChange} />;
    } else if (type === "tag") {
      return <TagInputText key={name + idx} {...input} onChange={onChange} />;
    } else {
      return <InputText key={name + idx} {...input} onChange={onChange} />;
    }
  });
};

export default InputWrapper;
