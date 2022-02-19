import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "@components/Common";
import Radio from "@components/Radio";
import MARadioGroup from "@components/MARadioGroup";

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
    <MARadioGroup name="민순기" size={size} labelLocation={labelLocation}>
      <Radio onChange={onChange} label={label} disabled={disabled} value={value} />
      <Radio onChange={onChange} label={label} disabled={disabled} value={value} />
    </MARadioGroup>
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: "hi",
  disabled: false,
  onChange: (e) => {
    console.log(e?.target.value);
    console.log(e?.target.checked);
    console.log(e?.target.name);
  },
  value: "빨강",
};
