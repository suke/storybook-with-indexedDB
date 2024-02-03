import type { Meta, StoryObj } from "@storybook/react";

import { UserList } from "./UserList";

const meta = {
  component: UserList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    idb: {
      users: [
        { id: 1, name: "foo", age: 20 },
        { id: 2, name: "bar", age: 20 },
        { id: 3, name: "hoge", age: 20 },
      ],
    },
  },
};

export const Empty: Story = {};
