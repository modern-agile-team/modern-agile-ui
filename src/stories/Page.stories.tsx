import { ComponentStory, ComponentMeta } from "@storybook/react";
import MAButton from "../components/MAButton";

export default {
  title: "Example/MAButton",
  component: MAButton,
} as ComponentMeta<typeof MAButton>;

const Template: ComponentStory<typeof MAButton> = ({ children }) => <MAButton>{children}</MAButton>;

export const Default = Template.bind({});
Default.args = {
  children: "버튼",
};
