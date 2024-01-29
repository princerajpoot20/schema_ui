// TreeEditor.tsx

import PropTypes from "prop-types";
import React from "react";
import { ButtonAdd3 } from "../../icons/ButtonAdd3";
import { JsonSchemaType } from "../JsonSchemaType";
import { TreeLeaf } from "../TreeLeaf";

interface Props {
  variant: "string" | "object";
  className: any;
  frameClassName: any;
}

export const TreeEditor = ({ variant, className, frameClassName }: Props): JSX.Element => {
  return (
    <div className={`w-[336px] relative ${variant === "string" ? "h-[16px]" : "h-[224px]"} ${className}`}>
      <div
        className={`[font-family:'Inter',Helvetica] left-0 tracking-[0] text-[12px] -top-px h-[13px] font-medium leading-[13px] whitespace-nowrap absolute ${
          variant === "object" ? "text-defaultpurple-500" : "text-defaultyellow-500"
        }`}
      >
        {variant === "string" && <>string</>}

        {variant === "object" && <>object</>}
      </div>
      {variant === "object" && (
        <div className={`flex w-[336px] items-start pl-[12px] pr-0 py-0 absolute top-[21px] left-0 ${frameClassName}`}>
          <img className="relative self-stretch w-px object-cover" alt="Line" src="/img/line-619-3.svg" />
          <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
            <TreeLeaf
              JSONSchemaTypeType="string"
              className="!self-stretch !flex-[0_0_auto] !w-full"
              kind="default"
              requiredIcon15Color="#DB2777"
              text="firstName"
            />
            <TreeLeaf
              JSONSchemaTypeType="string"
              className="!self-stretch !flex-[0_0_auto] !w-full"
              kind="default"
              requiredIcon15Color="#DB2777"
              text="lastName"
            />
            <TreeLeaf
              JSONSchemaTypeType="boolean"
              className="!self-stretch !flex-[0_0_auto] !w-full"
              kind="default"
              requiredIcon15Color="#334155"
              text="age"
            />
            <TreeLeaf
              className="!self-stretch !flex-[0_0_auto] !w-full"
              kind="multitype"
              requiredIcon15Color="#334155"
              text="height"
            />
            <TreeLeaf
              className="!self-stretch !flex-[0_0_auto] !w-full"
              kind="expandable"
              requiredIcon15Color="#334155"
            />
            <div className="gap-[6px] flex items-start pl-[14px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start relative flex-1 grow">
                <img className="relative self-stretch w-px object-cover" alt="Line" src="/img/line-619-4.svg" />
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                    <img className="w-[18px] relative h-px object-cover" alt="Line" src="/img/line-620-14.svg" />
                    <JsonSchemaType className="!flex-[0_0_auto]" type="object" />
                  </div>
                  <div className="flex items-start pl-[14px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <img className="relative self-stretch w-px object-cover" alt="Line" src="/img/line-619-5.svg" />
                    <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
                      <TreeLeaf
                        JSONSchemaTypeType="string"
                        className="!self-stretch !flex-[0_0_auto] !w-full"
                        kind="default"
                        requiredIcon15Color="#334155"
                        text="firstName"
                      />
                      <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                        <img className="w-[18px] relative h-px object-cover" alt="Line" src="/img/line-620-19.svg" />
                        <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                          <ButtonAdd3 className="!relative !w-[16px] !h-[16px]" />
                          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-extendedblue-gray600 text-[12px] tracking-[0] leading-[13px] whitespace-nowrap">
                            Add property
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
              <img className="w-[18px] relative h-px object-cover" alt="Line" src="/img/line-620-19.svg" />
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                <ButtonAdd3 className="!relative !w-[16px] !h-[16px]" />
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-extendedblue-gray600 text-[12px] tracking-[0] leading-[13px] whitespace-nowrap">
                  Add property
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "string" && (
        <img
          className={`absolute w-[32px] h-px top-[14px] left-0 object-cover ${frameClassName}`}
          alt="Line"
          src="/img/line-622-1.svg"
        />
      )}
    </div>
  );
};

TreeEditor.propTypes = {
  variant: PropTypes.oneOf(["string", "object"]),
};
