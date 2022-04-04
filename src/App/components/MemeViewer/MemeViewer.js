import React , { useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeViewer.module.scss";

const initialState = {};
/**
 *
 * @param {*} props
 * @returns
 */
const MemeViewer = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.MemeViewer} data-testid="MemeViewer">
      memeViewer
    </div>
  );
};

MemeViewer.propTypes = {};
MemeViewer.defaultProps = {};

export default MemeViewer;
