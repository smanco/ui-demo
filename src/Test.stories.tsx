import React from "react";
import { Meta, Story } from "@storybook/react";
import Test from "./Test";

export default {
  title: "Test",
  component: Test,
} as Meta;

const Template: Story = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  category: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  category: "secondary",
};
