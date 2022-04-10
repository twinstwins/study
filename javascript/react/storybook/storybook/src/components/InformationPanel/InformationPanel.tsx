import React from "react";
import "./InformationPanel.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faCircleCheck,
  faExclamationCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

/**
 * タイプに対応した font-awesome アイコンを取得
 * @param type
 * @returns
 */
function getFontAwesomeIcon(type: string) {
  switch (type) {
    case "information":
      return faInfoCircle;
    case "success":
      return faCircleCheck;
    case "warning":
      return faExclamationCircle;
    case "danger":
      return faExclamationCircle;
    default:
      return faCircle;
  }
}

type Props = {
  type: "information" | "success" | "warning" | "danger";
  message: string;
};

const InformationPanel: React.FC<Props> = (props) => {
  const { type, message } = props;

  const fontAwesomeIcon = getFontAwesomeIcon(type);

  return (
    <div className={"information-panel-view " + type}>
      <div className="text-area">
        <FontAwesomeIcon className="font-awesome-icon" icon={fontAwesomeIcon} />

        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default InformationPanel;
