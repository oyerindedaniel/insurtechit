'use client';

import { Offerings as OfferingsData } from '@/app/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ExternalImage from './ui/external-image';

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
  setActiveOfferingIdx
}) => {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden py-6 px-5 cursor-pointer bg-[#FAFAFA]',
        activeOfferingIdx === index && 'bg-brand border-[1.5px] border-[#FFCB01] text-white'
      )}
      onClick={() => setActiveOfferingIdx(index)}
    >
      <h6 className="font-medium text-xl mb-2 w-fit">{title}</h6>
      <p className="text-sm">{content}</p>
    </div>
  );
};

const Offerings = () => {
  const [activeOfferingIdx, setActiveOfferingIdx] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveOfferingIdx((prevIdx) => (prevIdx + 1) % OfferingsData.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-2/4 overflow-auto">
        <div className="flex w-[1500px] md:w-full flex-row md:flex-col gap-4">
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
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeOfferingIdx}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/4 relative rounded-xl min-h-[500px] md:min-h-full overflow-hidden"
        >
          {OfferingsData[activeOfferingIdx]?.image && (
            <ExternalImage
              src={OfferingsData[activeOfferingIdx]?.image}
              alt=""
              fill
              objectFit="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Offerings;
