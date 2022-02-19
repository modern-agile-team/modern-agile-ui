import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "@components/Common";
import Radio from "@components/Radio";
import MARadioGroup from "@components/MARadioGroup";

export default {
  title: "Example/MARadioGroup",
  component: MARadioGroup,
} as ComponentMeta<typeof MARadioGroup>;

const Template: ComponentStory<typeof MARadioGroup> = ({
  size,
  labelLocation,
  onChange,
  direction,
}) => (
  <StoryWrapper>
    <MARadioGroup
      direction={direction}
      onChange={onChange}
      name="민순기"
      size={size}
      labelLocation={labelLocation}
    >
      <Radio label="빨강" value="빨강" />
      <Radio label="파랑" value="파랑" />
    </MARadioGroup>
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  direction: "column",
  onChange: (e) => {
    console.log(e?.target.value);
    console.log(e?.target.checked);
  },
};
