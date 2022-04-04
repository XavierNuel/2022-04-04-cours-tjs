import React from 'react'
import style from './Button.module.css';
import PropTypes from 'prop-types'

function Button(props) {
    console.log(props);
    return (
        <button className="{ style.Button }" onClick={(evt)=> {
            props.evtOnClick('Hello');
            }}
            style={ {backgroundColor: props.bgColor } }
        >{props.text}</button>
    )
}

// On défini les propriétés du bouton et le type, et si c'est requis
Button.propTypes={
    text : PropTypes.string.isRequired,
    evtOnClick :  PropTypes.func.isRequired,
    bgColor: PropTypes.string
}
Button.defaultProps= {
    evtOnClick :  ()=>{console.error('Fonction du button undefined /App/Button')},
}
export default Button