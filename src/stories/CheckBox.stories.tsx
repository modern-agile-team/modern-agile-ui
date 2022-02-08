import MACheckBox from "@components/MACheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/MACheckBox",
  component: MACheckBox,
} as ComponentMeta<typeof MACheckBox>;

const Template: ComponentStory<typeof MACheckBox> = ({}) => <MACheckBox />;

export const Default = Template.bind({});
Default.args = {};
