'use client';

import { Offerings as OfferingsData } from '@/app/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Button } from './ui/button';
import ExternalImage from './ui/external-image';

interface OfferingProps {
  title: string;
  content: string;
  index: number;
  activeOfferingIdx: number;
  setActiveOfferingIdx: Dispatch<SetStateAction<number>>;
}

const OFFERING_WIDTH = 363;
const GAP = 16;

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
        'rounded-xl w-[363px] transition-all duration-500 md:w-full overflow-hidden py-6 px-5 cursor-pointer bg-[#FAFAFA]',
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

  const handleForwardButtonClick = () => {
    setActiveOfferingIdx((prevIdx) => (prevIdx + 1) % OfferingsData.length);
  };

  const handleBackwardButtonClick = () => {
    setActiveOfferingIdx((prevIdx) => (prevIdx - 1 + OfferingsData.length) % OfferingsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleForwardButtonClick();
    }, 7000);

    return () => clearInterval(interval);
  }, [activeOfferingIdx]);

  return (
    <div className="flex flex-col md:flex-row md:gap-6">
      <div className="md:w-2/4 overflow-hidden mb-3 md:mb-0">
        <div className="offerings flex transition-all duration-500 w-[1500px] md:transform-none md:w-full flex-row md:flex-col gap-4">
          <style>
            {`
          @media (max-width: 768px) {
            .offerings {
              transform: translateX(-${(OFFERING_WIDTH + GAP) * activeOfferingIdx}px);
            }
          }
        `}
          </style>
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
      <div className="w-full flex items-center justify-center gap-3 md:hidden mb-5">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleBackwardButtonClick}
          className="border-2 border-brand"
        >
          <MdKeyboardDoubleArrowLeft size="24px" fill="#2E3387" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="border-2 border-brand"
          onClick={handleForwardButtonClick}
        >
          <MdKeyboardDoubleArrowRight size="24px" fill="#2E3387" />
        </Button>
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
          <ExternalImage
            src={OfferingsData[activeOfferingIdx]?.image}
            alt=""
            fill
            objectFit="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Offerings;
