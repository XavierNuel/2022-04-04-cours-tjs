import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { store } from "../../store/store";
import Button from "../Button/Button";
import style from "./Modal.module.scss";

interface I_ModalProps {
  isShown: boolean;
  content: ReactElement | Array<ReactElement> | string;
  title: string | undefined;
  onClose: Function;
  onCancel: Function;
  closeCallback: Function;
  cancelCallback: Function;
}

const Modal: React.FC<I_ModalProps> = (props) => {
  return (
    <div
      className={style.Modal}
      data-testid="Modal"
      style={{ display: props.isShown ? "flex" : "none" }}
    >
      <div className={style.modalContent}>
        {props.title && <div className={style.title}>{props.title}</div>}
        <div className={style.content}>{props.content}</div>
        <div className={style.buttons}>
          {" "}
          {props.cancelCallback && (
            <Button
              evtOnClick={(evt) => {
                props.onCancel();
              }}
            >
              Cancel
            </Button>
          )}
          <Button
            evtOnClick={(evt) => {
              props.onClose();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(storeState: any, ownProps: any) {
  return {
    ...ownProps,
    ...storeState.modal,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onClose: () => {
      store.dispatch({
        type: "HIDE_MODAL",
      });
    },
    onCancel: () => {
      store.dispatch({
        type: "CANCEL_MODAL",
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
