import { RegisterHeader } from "/src/entities";
import { ImageList } from "/src/widgets/ImageList";
import { PLACEHOLDERLISTFORREGISTER } from "/src/shared/constants/constants";
import { ItemInput } from "../../../entities/ItemInput";
import { useState } from "react";

import "./RegisterPage.scss";

export function RegisterPage() {
  const [tags, setTags] = useState([]);

  return (
    <>
      <main className="register">
        <div className="register__content">
          <RegisterHeader active={false} />
          {/*active 로직 들어가야 함*/}
          <ImageList />
          <div className="register__inputList">
            {PLACEHOLDERLISTFORREGISTER.map((v, index) => (
              <ItemInput
                name={v[0]}
                placeholder={v[1]}
                type={v[2]}
                key={index}
                onKeyPress={
                  v[0] === "태그" &&
                  ((e) => {
                    if (e.key === "Enter") {
                      setTags((prevTag) => [...prevTag, e.target.value]);
                      e.target.value = "";
                    }
                  })
                }
              />
            ))}
            {/* <TagList tags={tags}> */}
          </div>
        </div>
      </main>
    </>
  );
}
