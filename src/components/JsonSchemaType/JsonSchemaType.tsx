// JsonSchemaType.tsx

import PropTypes from "prop-types";
import React from "react";

interface Props {
  type: "array-object" | "object" | "integer" | "string" | "boolean" | "null";
  className: any;
  arrayObjectClassName: any;
  text: string;
}

export const JsonSchemaType = ({ type, className, arrayObjectClassName, text = "string" }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-start gap-[10px] relative ${className}`}>
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[12px] font-medium leading-[13px] whitespace-nowrap relative ${
          type === "boolean"
            ? "text-defaultgreen-500"
            : type === "integer"
            ? "text-extendedcyan-500"
            : type === "null"
            ? "text-extendedred-700"
            : type === "array-object"
            ? "text-transparent"
            : type === "object"
            ? "text-defaultpurple-500"
            : "text-defaultyellow-500"
        } ${arrayObjectClassName}`}
      >
        {type === "string" && <>{text}</>}

        {type === "boolean" && <>boolean</>}

        {type === "integer" && <>integer</>}

        {type === "null" && <>null</>}

        {type === "array-object" && (
          <>
            <p>
              <span className="text-orange-900">array&lt;</span>
            </p>
            <p>
              <span className="text-violet-500">object</span>
            </p>
            <p>
              <span className="text-orange-900">&gt;</span>
            </p>
          </>
        )}

        {type === "object" && <>object</>}
      </div>
    </div>
  );
};

JsonSchemaType.propTypes = {
  type: PropTypes.oneOf(["array-object", "object", "integer", "string", "boolean", "null"]),
  text: PropTypes.string,
};
