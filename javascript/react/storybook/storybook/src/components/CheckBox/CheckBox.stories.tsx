import CheckBox from "./CheckBox";

export default {
  title: "CheckBox",
  component: CheckBox,
};

const Template = (args: any) => {
  return (
    <div className="wrapper checkbox">
      <CheckBox />
      <CheckBox />
      <CheckBox />
    </div>
  );
};

export const all: any = Template.bind({});
// all.args = {
//   children: "Red Button",
// };
