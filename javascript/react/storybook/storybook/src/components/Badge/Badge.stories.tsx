import Badge from "./Badge";

export default {
  title: "Badge",
  component: Badge,
};

const Template = (args: any) => <Badge {...args} />;

export const standard: any = Template.bind({});
standard.args = {
  text: "テキスト",
  type: "success",
};
