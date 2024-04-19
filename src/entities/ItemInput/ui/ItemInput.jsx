// {
//   PLACEHOLDERLISTFORREGISTER.map((v, index) => (
//     <ItemInput name={v[0]} placeHolder={v[1]} type={v[2]} key={index} />
//   ));
// }
import "./ItemInput.scss";

export function ItemInput({ name, placeHolder, type }) {
  return (
    <div className="ItemInput__card">
      <h2 className="ItemInput__subtitle">{name}</h2>
      <div>
        {type !== "textarea" ? (
          <input
            type={type}
            placeholder={placeHolder}
            className="ItemInput ItemInput--small"
          />
        ) : (
          <textarea
            className="ItemInput ItemInput--big"
            placeholder={placeHolder}
          ></textarea>
        )}
      </div>
    </div>
  );
}
