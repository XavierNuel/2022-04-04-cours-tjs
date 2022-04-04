import React from "react";
import PropTypes from "prop-types";
import style from "./FlexVLayout.module.scss";


const initialState = {};
/**
 *
 * @param {*} props
 * @returns
 */
const FlexVLayout = (props) => {
  return (
    <div className={style.FlexVLayout} data-testid="FlexVLayout">
      {props.children}
    </div>
  );
};

FlexVLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
FlexVLayout.defaultProps = {
  children: <div>Children absents</div>
};

export default FlexVLayout;
