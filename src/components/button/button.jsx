import "./button.scss";

const Button = (props) => {
  const click = props.onClick;
  return (
    <button
      id={props.id}
      type={props.type || "button"}
      onClick={click}
      className={props.className + " " + props.heightClass}
      style={{ background: props.background, color: props.color }}
      disabled={props.isDisabled || false}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
