import { StoryWrapper } from "@components/Common";
import MACheckBox from "@components/MACheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/MACheckBox",
  component: MACheckBox,
} as ComponentMeta<typeof MACheckBox>;

const Template: ComponentStory<typeof MACheckBox> = ({ onChange, value, disabled, sizes }) => {
  return (
    <StoryWrapper>
      <MACheckBox sizes={sizes} onChange={onChange} value={value} disabled={disabled} />
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
  disabled: false,
  sizes: "l",
};

export const Example1 = Template.bind({});
Example1.args = {
  onChange: (e) => {
    console.log(e?.target.value);
    console.log(e?.target.checked);
  },
  value: "hi",
  disabled: true,
  sizes: "xs",
};

export const Example2 = Template.bind({});
Example2.args = {
  onChange: (e) => {
    console.log(e?.target.value);
    console.log(e?.target.checked);
  },
  value: "hi",
  disabled: false,
  sizes: "xl",
};
