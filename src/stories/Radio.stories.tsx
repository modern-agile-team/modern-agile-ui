import { ComponentStory, ComponentMeta } from "@storybook/react";
import MARadio from "@components/MARadio";
import { StoryWrapper } from "@components/Common";

export default {
  title: "Example/MARadio",
  component: MARadio,
} as ComponentMeta<typeof MARadio>;

const Template: ComponentStory<typeof MARadio> = ({ size, label, labelLocation }) => (
  <StoryWrapper>
    <MARadio size={size} label={label} labelLocation={labelLocation}></MARadio>
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: "hi",
};
