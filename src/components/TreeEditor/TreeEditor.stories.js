// TreeEditor.stories.js

import { TreeEditor } from ".";

export default {
  title: "Components/TreeEditor",
  component: TreeEditor,
  argTypes: {
    variant: {
      options: ["string", "object"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "string",
    className: {},
    frameClassName: {},
  },
};
