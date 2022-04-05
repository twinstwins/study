import React from "react";
import "./Sample.scss";

type Props = {
  variant: string;
};

const Button: React.FC<Props> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
