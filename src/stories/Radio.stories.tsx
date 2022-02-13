import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "@components/Common";
import MARadioGroup from "@components/MARadioGroup";

export default {
  title: "Example/MARadio",
  component: MARadioGroup,
} as ComponentMeta<typeof MARadioGroup>;

const Template: ComponentStory<typeof MARadioGroup> = ({
  size,
  label,
  labelLocation,
  disabled,
  onChange,
  value,
}) => (
  <StoryWrapper>
    <MARadioGroup
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
  onChange: (e) => console.log(e?.target.value),
  value: "빨강",
};
