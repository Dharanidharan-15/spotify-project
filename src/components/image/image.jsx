
const Images = (props) =>{
    const click = props.onclick;
    return (
        <img 
        src={props.src}
        alt={props.alt}
        onClick={click}
        height={props.height}
        width={props.width}
        ></img>
    );
};

export default Images;