import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "@components/Common";
import Radio from "@components/Radio";
import MARadioGroup from "@components/MARadioGroup";

export default {
  title: "Example/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({ size, labelLocation, onChange }) => (
  <StoryWrapper>
    <MARadioGroup onChange={onChange} name="민순기" size={size} labelLocation={labelLocation}>
      <Radio label="빨강" value="빨강" />
      <Radio label="파랑" value="파랑" />
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
  },
};
