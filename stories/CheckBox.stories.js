import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";
import { CheckBox } from "../components/CheckBox";

export default {
  title: "Example/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: "Checked",
    value: true,
  },
};

export const Uncheck = {
  args: {
    label: "Uncheck",
    value: false,
  },

  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function onClick() {
      updateArgs({ value: !value });
    }
    return <CheckBox {...args} onClick={onClick} value={value} />;
  },
};
