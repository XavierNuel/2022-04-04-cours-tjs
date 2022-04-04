import React from "react";
import PropTypes from "prop-types";
import style from "./MemeForm.module.scss";

const initialState = {};
/**
 *
 * @param {*} props
 * @returns
 */
const MemeForm = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      memeForm
    </div>
  );
};

MemeForm.propTypes = {};
MemeForm.defaultProps = {};

export default MemeForm;
