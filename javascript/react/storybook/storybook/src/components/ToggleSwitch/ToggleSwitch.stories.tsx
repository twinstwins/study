import ToggleSwitch from "./ToggleSwitch";

export default {
  title: "ToggleSwitch",
  component: ToggleSwitch,
};

const toggleSwitchTemplate = (args: any) => <ToggleSwitch {...args} />;

export const toggleSwitchOn: any = toggleSwitchTemplate.bind({});
toggleSwitchOn.args = {
  on: false,
};
