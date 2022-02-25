import { StoryWrapper } from "@components/Common";
import MASelect from "@components/MASelect";
import MenuItem from "@components/MenuItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/MASelect",
  component: MASelect,
} as ComponentMeta<typeof MASelect>;

const Template: ComponentStory<typeof MASelect> = () => {
  return (
    <StoryWrapper>
      <MASelect>
        <MenuItem value="hi">hi</MenuItem>
        <MenuItem value="bye">bye</MenuItem>
        <MenuItem value="hello">hello</MenuItem>
        <MenuItem value="goodbye">goodbye</MenuItem>
      </MASelect>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
