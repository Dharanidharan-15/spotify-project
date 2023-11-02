const Images = (props) => {
  const click = props.onclick;
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      onClick={click}
      height={props.height}
      width={props.width}
    ></img>
  );
};

export default Images;
