import "./CustomInput.css";

const CustomInput = ({ style, type, placeholder, ...otherProp }) => {
  return (
    <input
      className="customInput"
      style={style}
      type={type}
      placeholder={placeholder}
      {...otherProp}
    />
  );
};
export default CustomInput;
