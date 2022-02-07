import "./CustomButton.css";

const CustomButton = ({ title, style, ...props }) => {
  return (
    <button className="customButton" style={style} {...props}>
      {title}
    </button>
  );
};
export default CustomButton;
