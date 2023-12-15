import React from "react";
import "./SampleComponent.scss";

type Props = {
  variant: string;
};

const SampleComponent: React.FC<Props> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default SampleComponent;
