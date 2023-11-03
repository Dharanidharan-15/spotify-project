import "./button.scss";

const Button = (props) => {
  return (
    <button
      id={props.id}
      type={props.type || "button"}
      onClick={props.onClick}
      title={props.title}
      key={props.index}
      className={props.className}
      style={{ background: props.background, color: props.color }}
      disabled={props.isDisabled || false}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
