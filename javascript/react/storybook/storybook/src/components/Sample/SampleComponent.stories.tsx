import React from "react";
import SampleComponent from "./SampleComponent";

export default {
  title: "SampleComponent",
  component: SampleComponent,
};

const Template = (args: any) => <SampleComponent {...args} />;

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

export const largeButton: any = Template.bind({});
largeButton.args = {
  variant: "blue",
  children: "Large Button",
};
