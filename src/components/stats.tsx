'use client';

import React from 'react';
import CountUp from 'react-countup';

interface StatsProps {
  prefix: string;
  figure: number;
  about?: string;
}

const Stats: React.FC<StatsProps> = ({ figure, about, prefix }) => {
  return (
    <div className="backdrop-blur-[2px] bg-[#DFEFFE]/15 px-8 py-6 w-full gap-2 rounded-lg border border-border/50 flex flex-col items-start justify-center">
      <CountUp end={figure} prefix={prefix ? prefix : ''} suffix="+" enableScrollSpy>
        {({ countUpRef }) => (
          <>
            <span className="text-6xl font-semibold" ref={countUpRef} />
          </>
        )}
      </CountUp>
      {about && <span className="text-xl font-semibold">{about}</span>}
    </div>
  );
};

export default Stats;
