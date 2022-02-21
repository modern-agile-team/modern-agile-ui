import { StoryWrapper } from "@components/Common";
import MASelect from "@components/MASelect";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/MASelect",
  component: MASelect,
} as ComponentMeta<typeof MASelect>;

const Template: ComponentStory<typeof MASelect> = () => {
  return (
    <StoryWrapper>
      <MASelect />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
