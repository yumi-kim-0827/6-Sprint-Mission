// {
//   PLACEHOLDERLISTFORREGISTER.map((v, index) => (
//     <ItemInput name={v[0]} placeHolder={v[1]} type={v[2]} key={index} />
//   ));
// }
import "./ItemInput.scss";

export function ItemInput({ name, placeholder, type, onKeyPress = null }) {
  const props = onKeyPress
    ? { name, placeholder, type, onKeyPress }
    : { name, placeholder, type };
  return (
    <div className="ItemInput__card">
      <h2 className="ItemInput__subtitle">{name}</h2>
      <div>
        {type !== "textarea" ? (
          <input className="ItemInput ItemInput--small" {...props} />
        ) : (
          <textarea
            className="ItemInput ItemInput--big"
            placeholder={placeholder}
          ></textarea>
        )}
      </div>
    </div>
  );
}
