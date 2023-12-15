import FormInput from "./FormInput";

export default {
  title: "FormInput",
  component: FormInput,
};

const Template = (args: any) => <FormInput {...args} />;

export const standard: any = Template.bind({});
standard.args = {};
