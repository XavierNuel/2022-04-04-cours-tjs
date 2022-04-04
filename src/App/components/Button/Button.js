import React , { useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
import { isPropertyAccessOrQualifiedName } from "typescript";

function Button(props) {
    const [clicked, setclicked] = useState(false);
  console.log(props);
  return (
    <button
      className={style.Button + ' ' + 'clicked'}
      onClick={(evt) => {
        props.evtOnClick("Hello");
        setclicked(true);
        setTimeout(()=>{
            setclicked( false)
      }, 1000)
      }}
      style={{...props.style, backgroundColor: props.bgColor, color: props.color }}
      type={props.type}
    >
      {props.children}
      {clicked?'clicked':'unclicked'}
    </button>
  );
}

// On défini les propriétés du bouton et le type, et si c'est requis
Button.propTypes = {
  evtOnClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};
Button.defaultProps = {
  evtOnClick: () => {
    console.error("Fonction du button undefined /App/Button");
  },
  type: "button",
  color: "#fff",
  bgColor: "rgb(0, 54, 85)",
};
export default Button;
