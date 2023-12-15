import React, { useState } from "react";
import "./Modal.scss";

type Props = {
  show: boolean;
  setShow: any;
  content: any;
};

const Modal: React.FC<Props> = ({ show, setShow, content }) => {
  const closeModal = () => {
    setShow(false);
  };

  if (show) {
    return (
      <div className="modal">
        <div className="overlay" onClick={closeModal}>
          <div className="content" onClick={(event) => event.stopPropagation()}>
            <h1> Modal Window</h1>

            <div>{content}</div>

            <p>
              <button onClick={closeModal}>close</button>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
