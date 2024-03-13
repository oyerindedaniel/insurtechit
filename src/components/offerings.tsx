"use client";

import { Offerings as OfferingsData } from "@/app/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface OfferingProps {
  title: string;
  content: string;
  index: number;
  activeOfferingIdx: number;
  setActiveOfferingIdx: Dispatch<SetStateAction<number>>;
}

const Offering: React.FC<OfferingProps> = ({
  title,
  content,
  index,
  activeOfferingIdx,
  setActiveOfferingIdx,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden py-6 px-5 cursor-pointer bg-[#FAFAFA]",
        activeOfferingIdx === index &&
          "bg-brand border-[1.5px] border-[#FFCB01] text-white"
      )}
      onClick={() => setActiveOfferingIdx(index)}
    >
      <h6 className="font-medium text-xl mb-2">{title}</h6>
      <p className="text-sm">{content}</p>
    </div>
  );
};

const Offerings = () => {
  const [activeOfferingIdx, setActiveOfferingIdx] = useState(0);
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4 w-2/4">
        {OfferingsData.map((offering, idx) => (
          <Offering
            key={idx}
            index={idx}
            title={offering?.title}
            content={offering?.content}
            setActiveOfferingIdx={setActiveOfferingIdx}
            activeOfferingIdx={activeOfferingIdx}
          />
        ))}
      </div>
      <div className="w-2/4 relative rounded-xl overflow-hidden">
        <Image
          src={OfferingsData[activeOfferingIdx]?.image}
          alt=""
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Offerings;