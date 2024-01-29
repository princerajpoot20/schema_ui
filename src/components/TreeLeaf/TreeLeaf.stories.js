// TreeLeaf.stories.js

import { TreeLeaf } from ".";

export default {
  title: "Components/TreeLeaf",
  component: TreeLeaf,
  argTypes: {
    kind: {
      options: ["expandable", "multitype", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    kind: "expandable",
    className: {},
    requiredIcon15Color: "#334155",
    text: "firstName",
    JSONSchemaTypeType: "string",
  },
};
