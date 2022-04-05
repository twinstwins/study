import React from "react";
import "./ToggleSwitch.scss";

type Props = {
  text: string;
  isClicked: boolean;
};

const ToggleSwitch = (props: Props) => {
  return (
    <div>
      <h2>{props.text}</h2>
      <h1>{props.isClicked}</h1>
    </div>
  );
};

export default ToggleSwitch;
