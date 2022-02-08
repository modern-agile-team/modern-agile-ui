import { StoryWrapper } from "@components/Common";
import MACheckBox from "@components/MACheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/MACheckBox",
  component: MACheckBox,
} as ComponentMeta<typeof MACheckBox>;

const Template: ComponentStory<typeof MACheckBox> = ({ onChange, value }) => {
  return (
    <StoryWrapper>
      <MACheckBox onChange={onChange} value={value} />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => {
    console.log(e?.target.value);
    console.log(e?.target.checked);
  },
  value: "hi",
};
