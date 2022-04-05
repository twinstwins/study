import React from "react";
import ToggleSwitch from "./ToggleSwitch";

export default {
  title: "ToggleSwitch",
  component: ToggleSwitch,
};

const toggleSwitchTemplate = (args: any) => <ToggleSwitch {...args} />;

export const toggleSwitchOn: any = toggleSwitchTemplate.bind({});
toggleSwitchOn.args = {
  text: "オン",
  isClicked: true,
};

export const toggleSwitchOff: any = toggleSwitchTemplate.bind({});
toggleSwitchOff.args = {
  text: "オフ",
  isClicked: false,
};
