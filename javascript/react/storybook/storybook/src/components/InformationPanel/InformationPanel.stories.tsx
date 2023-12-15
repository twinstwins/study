import InformationPanel from "./InformationPanel";

export default {
  title: "InformationPanel",
  component: InformationPanel,
};

const Template = (args: any) => <InformationPanel {...args} />;

export const standard: any = Template.bind({});
standard.args = {
  type: "information",
  message: "これはテストメッセージです",
};
