// SchemaEditor.stories.js

import { SchemaEditor } from ".";

export default {
  title: "Components/SchemaEditor",
  component: SchemaEditor,
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
    treeEditorFrameClassName: {},
  },
};
