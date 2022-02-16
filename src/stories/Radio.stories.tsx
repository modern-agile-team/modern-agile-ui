import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "@components/Common";
import Radio from "@components/Radio";

export default {
  title: "Example/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({
  size,
  label,
  labelLocation,
  disabled,
  onChange,
  value,
}) => (
  <StoryWrapper>
    <Radio
      onChange={onChange}
      size={size}
      label={label}
      labelLocation={labelLocation}
      disabled={disabled}
      value={value}
    />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: "hi",
  disabled: false,
  onChange: (e) => {
    console.log(e?.target.value);
    console.log(e?.target.checked);
  },
  value: "빨강",
};
