// JsonSchemaType.stories.js

import { JsonSchemaType } from ".";

export default {
  title: "Components/JsonSchemaType",
  component: JsonSchemaType,
  argTypes: {
    type: {
      options: ["array-object", "object", "integer", "string", "boolean", "null"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "array-object",
    className: {},
    arrayObjectClassName: {},
    text: "string",
  },
};
