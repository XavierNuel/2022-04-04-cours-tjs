import React, { useState, useEffect } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  const [clicked, setclicked] = useState(false);
  useEffect(
    // fonction au mount du composant
    () => {
      if (clicked) {
        setTimeout(() => {
          setclicked(false);
        }, 700);
      }
      // Return
      // fonction pour le démount du composant si on veut
      // return () => {
      // };
    },
    [clicked]
  );

  console.log(props);
  return (
    <button
      className={`${style.Button}${clicked ? " " + style.clicked : ""}`}
      onClick={(evt) => {
        props.evtOnClick("Hello");
        setclicked(true);
      }}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      type={props.type}
    >
      {props.children}
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
