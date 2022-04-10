import React from "react";
import "./RotateCheck.scss";

type Props = {
  isChecked: boolean;
};

const RotateCheck: React.FC<Props> = (props) => {
  return (
    <span className="rotate-check">
      {props.isChecked ? (
        <span className="check" />
      ) : (
        <span className="square" />
      )}
    </span>
  );
};

export default RotateCheck;
