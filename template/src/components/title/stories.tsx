import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";
import { expect } from "@storybook/jest";
import Title from ".";

const meta: Meta<typeof Title> = {
  component: Title,
  title: "components/title",
  argTypes: {
    value: {
      control: { type: "text" },
    },
    onClick: { action: "click!" },
  },
};
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: { value: "Hello world", onClick: action("click!") },
};

// Automated test to verify that the component behaves as expected
export const Test: Story = {
  args: { value: "Hello world", onClick: action("click!") },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByTestId("root");
    expect(title).toBeInTheDocument();
    userEvent.click(title);
    expect(title).toHaveTextContent("Hello world");
  },
};

export default meta;
