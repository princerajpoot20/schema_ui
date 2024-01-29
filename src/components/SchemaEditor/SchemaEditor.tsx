// SchemaEditor.tsx

import PropTypes from "prop-types";
import React from "react";
import { SchemaEditorMenu } from "../SchemaEditorMenu";
import { TreeEditor } from "../TreeEditor";

interface Props {
  variant: "string" | "object";
  className: any;
  treeEditorFrameClassName: any;
}

export const SchemaEditor = ({ variant, className, treeEditorFrameClassName }: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-extendedblue-gray800 w-[360px] flex flex-col items-start gap-[8px] overflow-hidden rounded-[5px] bg-extendedblue-gray900 relative ${
        variant === "string" ? "p-[12px]" : "pt-[8px] pb-[12px] px-[12px]"
      } ${className}`}
    >
      <SchemaEditorMenu className="!self-stretch !flex-[0_0_auto] !w-full" />
      <TreeEditor
        className="!self-stretch !w-full"
        frameClassName={treeEditorFrameClassName}
        variant={variant === "string" ? "string" : "object"}
      />
    </div>
  );
};

SchemaEditor.propTypes = {
  variant: PropTypes.oneOf(["string", "object"]),
};
