import React from "react";
import "./CheckBox.scss";

type Props = {
  variant?: string;
};

const CheckBox: React.FC<Props> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CheckBox;
