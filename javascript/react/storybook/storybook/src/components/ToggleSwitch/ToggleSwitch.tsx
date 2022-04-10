import React, { useState } from "react";
import "./ToggleSwitch.scss";

type Props = {
  on: boolean;
};

function handleClick() {
  console.log("クリック");
}

const ToggleSwitch = (props: Props) => {
  const on = props.on;

  return (
    <button
      onClick={handleClick}
      className={"btn-toggle " + (on ? "active" : "")}
    >
      <div className="handle"></div>
    </button>
  );
};
export default ToggleSwitch;
