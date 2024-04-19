import { RegisterHeader } from "../../../entities";
import { ImageList } from "../../../widgets/ImageList";
import { PLACEHOLDERLISTFORREGISTER } from "/src/shared/constants/constants";
import { ItemInput } from "../../../entities/ItemInput";
import { useEffect, useState } from "react";

import "./RegisterPage.scss";
import { TagList } from "../../../entities/TagList";
import { FORMDATA } from "../../../shared/constants/constants";

export function RegisterPage() {
  const [tags, setTags] = useState(null);
  const [file, setFile] = useState(FORMDATA);

  let active =
    file.title && file.description && file.price && file.image && file.tags;

  const handleDelete = (value) => {
    setTags((prevTags) =>
      prevTags.length == 1 ? null : prevTags.filter((v) => v !== value)
    );
  };

  const handleChange = (name, value) => {
    setFile((prevFile) => ({
      ...prevFile,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
  };

  useEffect(() => {
    setFile((prevFile) => ({
      ...prevFile,
      tags,
    }));
  }, [tags]);

  return (
    <>
      <main className="register">
        <form className="register__content" onSubmit={handleSubmit}>
          <RegisterHeader active={active} />
          {/*active 로직 들어가야 함*/}
          <ImageList onChange={setFile} />
          <div className="register__inputList">
            {PLACEHOLDERLISTFORREGISTER.map(
              (v, index) =>
                index !== PLACEHOLDERLISTFORREGISTER.length - 1 && (
                  <ItemInput
                    name={v[3]}
                    value={v[0]}
                    placeholder={v[1]}
                    type={v[2]}
                    key={index}
                    onChange={handleInputChange}
                  />
                )
            )}
            <div className="register__Tags">
              <ItemInput
                name={
                  PLACEHOLDERLISTFORREGISTER[
                    PLACEHOLDERLISTFORREGISTER.length - 1
                  ][3]
                }
                value={
                  PLACEHOLDERLISTFORREGISTER[
                    PLACEHOLDERLISTFORREGISTER.length - 1
                  ][0]
                }
                placeholder={
                  PLACEHOLDERLISTFORREGISTER[
                    PLACEHOLDERLISTFORREGISTER.length - 1
                  ][1]
                }
                type={
                  PLACEHOLDERLISTFORREGISTER[
                    PLACEHOLDERLISTFORREGISTER.length - 1
                  ][2]
                }
                key={-1}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newValue = e.target.value;
                    e.target.value = "";
                    setTags((prevTag) =>
                      prevTag ? [...prevTag, newValue] : [newValue]
                    );
                  }
                }}
              ></ItemInput>
              <TagList tags={tags} onDelete={handleDelete} />
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
