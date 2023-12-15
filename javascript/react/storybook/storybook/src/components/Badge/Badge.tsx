import React from "react";
import "./Badge.scss";

type Props = {
  text: string;
  type: "info" | "success" | "warning" | "danger";
};

const Badge: React.FC<Props> = (props) => {
  const { text, type } = props;
  return <span className={"badge-view " + type}>{text}</span>;
};

export default Badge;
