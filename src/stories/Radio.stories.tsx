import { ComponentStory, ComponentMeta } from "@storybook/react";
import MARadio from "@components/MARadio";

export default {
  title: "Example/MARadio",
  component: MARadio,
} as ComponentMeta<typeof MARadio>;

const Template: ComponentStory<typeof MARadio> = () => <MARadio></MARadio>;

export const Default = Template.bind({});
Default.args = {};
