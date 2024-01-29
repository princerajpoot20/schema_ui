// SchemaEditorMenu.tsx

import React from "react";
import { HeroiconsOutlineEllipsisVertical2 } from "../../icons/HeroiconsOutlineEllipsisVertical2";

interface Props {
  className: any;
}

export const SchemaEditorMenu = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-[336px] items-start gap-[5px] pt-0 pb-[8px] px-0 relative border-b [border-bottom-style:solid] border-extendedblue-gray800 ${className}`}
    >
      <div className="items-center self-stretch w-full flex-[0_0_auto] flex gap-[12px] relative">
        <div className="items-start flex-1 grow flex gap-[12px] relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-extendedblue-gray300 text-[12px] tracking-[0] leading-[13px] whitespace-nowrap">
            Visual Editor
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-extendedblue-gray500 text-[12px] tracking-[0] leading-[13px] whitespace-nowrap">
            Code Editor
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-extendedblue-gray500 text-[12px] tracking-[0] leading-[13px] whitespace-nowrap">
            Examples
          </div>
        </div>
        <HeroiconsOutlineEllipsisVertical2 className="!relative !w-[20px] !h-[20px]" color="#64748B" />
      </div>
    </div>
  );
};
