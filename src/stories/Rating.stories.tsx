import { ComponentStory, ComponentMeta } from "@storybook/react";
import MARating from "@components/MARating";

export default {
  title: "Example/MARating",
  component: MARating,
} as ComponentMeta<typeof MARating>;

const Template: ComponentStory<typeof MARating> = ({
  sizes = "m",
  disabled = false,
}) => <MARating sizes={sizes} disabled={disabled} />;

export const Default = Template.bind({});
Default.args = {};
