import React from "react";
import PropTypes from "prop-types";
import style from "./FlexWLayout.module.scss";

/**
 *
 * @param {*} props
 * @returns
 */
const FlexWLayout = (props) => {
  return (
    <div className={style.FlexWLayout} data-testid="FlexWLayout">
      {props.children}
    </div>
  );
};

FlexWLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
FlexWLayout.defaultProps = {
  children: <div>Children absents</div>
};

export default FlexWLayout;
