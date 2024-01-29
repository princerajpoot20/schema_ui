// TreeLeaf.tsx

import PropTypes from "prop-types";
import React from "react";
import { HeroiconsMiniChevronRight2 } from "../../icons/HeroiconsMiniChevronRight2";
import { RequiredIcon15 } from "../../icons/RequiredIcon15";
import { JsonSchemaType } from "../JsonSchemaType";

interface Props {
  kind: "expandable" | "multitype" | "default";
  className: any;
  requiredIcon15Color: string;
  text: string;
  JSONSchemaTypeType: string;
}

export const TreeLeaf = ({
  kind,
  className,
  requiredIcon15Color = "#334155",
  text = "firstName",
  JSONSchemaTypeType = "string",
}: Props): JSX.Element => {
  return (
    <div className={`w-[324px] flex items-center gap-[6px] relative ${className}`}>
      <div
        className={`flex items-center grow flex-1 relative ${kind === "expandable" ? "self-stretch" : ""} ${
          kind === "expandable" ? "gap-[2px]" : "gap-[6px]"
        }`}
      >
        {["default", "multitype"].includes(kind) && (
          <>
            <img className="w-[18px] object-cover h-px relative" alt="Line" src="/img/line-620-19.svg" />
            <div className="[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[12px] text-extendedblue-gray100 font-medium leading-[13px] whitespace-nowrap relative">
              {text}
            </div>
          </>
        )}

        {kind === "default" && <JsonSchemaType className="!flex-[0_0_auto]" text="string" type={JSONSchemaTypeType} />}

        {kind === "multitype" && (
          <>
            <JsonSchemaType className="!flex-[0_0_auto]" type="integer" />
            <JsonSchemaType
              arrayObjectClassName="!text-extendedblue-gray400"
              className="!flex-[0_0_auto]"
              text="or"
              type="string"
            />
            <JsonSchemaType className="!flex-[0_0_auto]" type="null" />
          </>
        )}

        {kind === "expandable" && (
          <>
            <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
              <img className="relative w-[6px] h-px object-cover" alt="Line" src="/img/line-620-20.svg" />
              <HeroiconsMiniChevronRight2 className="!relative !w-[14px] !h-[14px]" />
            </div>
            <div className="flex items-start gap-[6px] relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-extendedblue-gray100 text-[12px] tracking-[0] leading-[13px] whitespace-nowrap">
                friends
              </div>
              <JsonSchemaType className="!flex-[0_0_auto]" type="array-object" />
            </div>
          </>
        )}
      </div>
      <RequiredIcon15 className="!relative !flex-[0_0_auto]" color={requiredIcon15Color} />
    </div>
  );
};

TreeLeaf.propTypes = {
  kind: PropTypes.oneOf(["expandable", "multitype", "default"]),
  requiredIcon15Color: PropTypes.string,
  text: PropTypes.string,
  JSONSchemaTypeType: PropTypes.string,
};
