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
          {PLACEHOLDERLISTFORREGISTER.map((v, index) => (
            <ItemInput name={v[0]} placeHolder={v[1]} type={v[2]} key={index} />
          ))}
          {/* <TagInput onChange={setTags} /> */}
          {/* <tagList tags={tags}> */}
        </div>
      </main>
    </>
  );
}
