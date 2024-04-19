import { RegisterHeader } from "/src/entities";
import { ImageList } from "/src/widgets/ImageList";
import { PLACEHOLDERLISTFORREGISTER } from "/src/shared/constants/constants";
import { ItemInput } from "../../../entities/ItemInput";
import { useState } from "react";

import "./RegisterPage.scss";
import { TagList } from "../../../entities/TagList";

export function RegisterPage() {
  const [tags, setTags] = useState([]);

  const handleDelete = (value) => {
    setTags((prevTags) => prevTags.filter((v) => v !== value));
  };

  return (
    <>
      <main className="register">
        <div className="register__content">
          <RegisterHeader active={false} />
          {/*active 로직 들어가야 함*/}
          <ImageList />
          <div className="register__inputList">
            {PLACEHOLDERLISTFORREGISTER.map(
              (v, index) =>
                index !== PLACEHOLDERLISTFORREGISTER.length - 1 && (
                  <ItemInput
                    name={v[0]}
                    placeholder={v[1]}
                    type={v[2]}
                    key={index}
                  />
                )
            )}
            <div className="register__Tags">
              <ItemInput
                name={
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
                  ][0]
                }
                key={-1}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setTags((prevTag) => [...prevTag, e.target.value]);
                  }
                }}
              ></ItemInput>
              <TagList tags={tags} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
