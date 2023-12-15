import RotateCheck from "./RotateCheck";

export default {
  title: "RotateCheck",
  component: RotateCheck,
};

const Template = (args: any) => <RotateCheck {...args} />;

export const standard: any = Template.bind({});
standard.args = {
  isChecked: false,
};
