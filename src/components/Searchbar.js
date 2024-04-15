import "./Searchbar.css";

function Searchbar({ className, placeholder, value, onChange }) {
  const handleChange = (e) => {
    value = e.target.value;
    onChange(value);
  };

  return (
    <div className={`input ${className}`}>
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      <i className="icon-search"></i>
    </div>
  );
}

export default Searchbar;
