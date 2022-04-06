import React from "react";
import Sample from "./Sample";

export default {
  title: "Sample",
  component: Sample,
};

const Template = (args: any) => <Sample {...args} />;

export const redButton: any = Template.bind({});
redButton.args = {
  variant: "red",
  children: "Red Button",
};

export const blueButton: any = Template.bind({});
blueButton.args = {
  variant: "blue",
  children: "Blue Button",
};
