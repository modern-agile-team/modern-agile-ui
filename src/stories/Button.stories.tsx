import { ComponentStory, ComponentMeta } from "@storybook/react";
import MAButton from "@components/MAButton";

export default {
  title: "Example/MAButton",
  component: MAButton,
} as ComponentMeta<typeof MAButton>;

const Template: ComponentStory<typeof MAButton> = ({
  children,
  sizes = "m",
  varient = "contained",
  disabled = false,
}) => (
  <MAButton sizes={sizes} varient={varient} disabled={disabled}>
    {children}
  </MAButton>
);

export const Default = Template.bind({});
Default.args = {
  children: "버튼",
};
