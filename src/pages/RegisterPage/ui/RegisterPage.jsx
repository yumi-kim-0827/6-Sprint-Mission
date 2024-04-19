import { RegisterHeader } from "../../../entities/RegisterHeader/RegisterHeader";
import "./RegisterPage.scss";

import { PLACEHOLDERLISTFORREGISTER } from "/src/shared/constants/constants";

export function RegisterPage() {
  return (
    <>
      <main className="register">
        <div className="register__content">
          <RegisterHeader active={false} />;{/* <FileInput /> */}
          {/* </>{PLACEHOLDERLISTFORREGISTER.map((v, index) => ( */}
          {/* <InputBlock name={v[0]} placeHolder={v[1]} type={v[2]} key={index} /> */}
          {/* ))} */}
          {/* <tagList tags={tags}> */}
        </div>
      </main>
    </>
  );
}
