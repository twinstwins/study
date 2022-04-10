import Form1 from "./Form1";

export default {
  title: "Form1",
  component: Form1,
};

const Template = (args: any) => <Form1 {...args} />;

export const standard: any = Template.bind({});
standard.args = {};
