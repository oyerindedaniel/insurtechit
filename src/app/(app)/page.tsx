'use client';

import { Arrow } from '@/assets';
import Offerings from '@/components/offerings';
import SectionContainer from '@/components/section-container';
import Stats from '@/components/stats';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button, buttonVariants } from '@/components/ui/button';
import ExternalImage from '@/components/ui/external-image';
import Values from '@/components/values';
import { Colors } from '@/config';
import { useGlobalStoreContext } from '@/context';
import { cn } from '@/lib/utils';
import { Keys } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CoreValues, OurStats, Partners } from '../constants';

export default function Home() {
  const { state, dispatch } = useGlobalStoreContext();

  const sectionRefs: React.MutableRefObject<HTMLElement[]> = useRef([]);

  const [trackNavBarIntersection, setTrackNavBarIntersection] = useState({
    header: false
  });

  const NAVBAR_HEIGHT = '70.28';

  useEffect(() => {
    if (Object.keys(trackNavBarIntersection).length !== 0) {
      const arrOfIntersectionIdKeys: string[] = Object.keys(trackNavBarIntersection);
      const arrOfIntersectionIdValues: boolean[] = Object.values(trackNavBarIntersection);
      const firstTrueIndex: number = arrOfIntersectionIdValues.indexOf(true);
      const firstTrueIndexIdKey: string = arrOfIntersectionIdKeys[firstTrueIndex];

      if (!firstTrueIndexIdKey) return;

      const color = Colors[firstTrueIndexIdKey];

      dispatch({
        type: 'SET_NAVBAR-COLOR',
        payload: { color }
      });
    }
  }, [dispatch, trackNavBarIntersection]);

  const obsCallback = useCallback((entries: any) => {
    entries.forEach((entry: any) => {
      setTrackNavBarIntersection((prevTrackNavBarIntersection) => {
        return {
          ...prevTrackNavBarIntersection,
          [entry.target.id]: entry.isIntersecting
        };
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(obsCallback, {
      root: null,
      threshold: [0],
      rootMargin: `-${NAVBAR_HEIGHT}px`
    });
    if (sectionRefs?.current) {
      sectionRefs.current.forEach((section: any) => {
        observer.observe(section);
      });
    }

    return () => observer.disconnect();
  }, [obsCallback]);

  // [font-size:_clamp(45px,4.5vw,60px)]

  const grid =
    'sm:col-start-1 sm:col-end-7 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:row-end-5 sm:row-start-5 sm:row-end-9 lg:col-start-1 lg:col-end-5 lg:col-start-5 lg:col-end-9 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-7 lg:row-start-7 lg:row-end-13';

  return (
    <main className="overflow-hidden">
      <SectionContainer
        id={Keys.SECTION_1}
        ref={(element) => sectionRefs?.current.push(element!)}
        className="bg-brand text-white pt-[125px] pb-[100px] bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-top"
      >
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="w-full md:w-2/4 mb-12 md:mb-0">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: '.5' }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-center md:text-left font-poppins font-medium mb-4"
            >
              Digital Technology Platform for Emerging Markets.
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: '.5', delay: 0.5 }}
              viewport={{ once: true }}
              className="text-md sm:text-lg mb-8 text-center md:text-left"
            >
              We provide you with a hassle-free, reliable, and customized digital technology
              platform to deliver value to your customers.
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: '.5', delay: 1 }}
              viewport={{ once: true }}
              className="flex gap-4 sm:gap-6 items-center justify-center flex-col sm:flex-row md:justify-start"
            >
              <Button
                type="button"
                size="lg"
                className="bg-white text-brand text-base w-full sm:w-fit"
                rightElement={<Arrow className="ml-2 w-4 h-4" />}
              >
                Request for Demo
              </Button>
              <Button
                type="button"
                size="lg"
                className="text-base w-full sm:w-fit backdrop-blur-[2px] bg-[#DFEFFE]/15"
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>
          <div className="w-full md:w-[45%] z-0 relative">
            <Image
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502580/folder/hww6lttfjiwjgugzqmrx.png"
              alt=""
              fill
              className="absolute -z-10 translate-x-2/4 scale-125"
            />
            <ExternalImage
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502582/folder/uflojph6wmv2ivg8w7fm.png"
              alt="insurtechit"
              height={804}
              width={804}
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id={Keys.SECTION_2}
        ref={(element) => sectionRefs?.current.push(element!)}
        className="my-20"
      >
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: '.4' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-poppins mb-8"
        >
          Our Strategic Partners
        </motion.h2>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: '.5', delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-4 max-w-[1000px] mx-auto w-full"
        >
          {Partners.map((partner) => (
            <ExternalImage
              key={partner?.alt}
              src={partner?.image}
              alt={partner?.alt}
              width={100}
              height={100}
            />
          ))}
        </motion.div>
      </SectionContainer>
      <SectionContainer id={Keys.SECTION_3} className="my-20">
        <p className="mb-1 text-base text-brand text-center">
          Our achievement in the journey depicted in numbers
        </p>
        <h2 className="text-3xl md:text-4xl text-center font-poppins mb-8">
          Some count that matters
        </h2>
        <div
          ref={(element) => sectionRefs?.current.push(element!)}
          className="bg-brand flex-wrap lg:flex-nowrap px-4 lg:px-8 py-14 min-h-[300px] rounded-xl text-white flex items-center justify-between gap-6 bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-center"
        >
          {OurStats.map((stat, idx) => (
            <Stats key={idx} prefix={stat.prefix} about={stat.about} figure={stat.figure} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer
        id={Keys.SECTION_4}
        ref={(element) => sectionRefs?.current.push(element!)}
        className="my-20"
      >
        <p className="mb-1 text-base text-brand text-center">About Us</p>
        <h2 className="text-3xl md:text-4xl text-center font-poppins mb-12">
          Enabling Financial Institutions and other <br className="hidden lg:block" /> players to
          reach the Banked and Unbanked
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-2/4">
            <ExternalImage
              className="mb-6"
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502561/folder/fldzw5jsqgxbh2nvqgkg.png"
              alt="our story"
              width={75}
              height={75}
            />
            <h3 className="text-3xl lg:text-4xl font-medium font-poppins mb-4">Our Story</h3>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: '.5' }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <p className="mb-6">
                We understand that to deliver value continuously and to support the customers –
                financial institutions and emerging customers, we must ask the customers, “How can
                we help them get their job done?” <br /> With this question in mind, we set out to
                provide and enable financial transactions for emerging customers and address their
                pain points by leveraging technology as an enabler.
              </p>
              <p>
                We envision a world where we can be confident in helping customers provide value
                through disruptive strategy.
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-[45%] grid gap-3 grid-cols-12 grid-rows-12 min-h-[650px] lg:min-h-full lg:h-[450px]">
            <div className="relative col-start-1 col-end-13 row-start-9 row-end-13 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:row-end-13 rounded-xl overflow-hidden">
              <ExternalImage
                src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502758/folder/hmsxwtc5krb2mjr2iv0h.png"
                alt=""
                fill
                className="object-top"
              />
            </div>
            <div className="relative col-start-1 col-end-13 row-start-1 row-end-5 sm:col-start-1 sm:col-end-7 sm:row-start-7 sm:row-end-13 rounded-xl overflow-hidden">
              <ExternalImage
                src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502527/folder/nttkxs1ss9bjvwzsazaq.png"
                alt=""
                fill
              />
            </div>
            <div className="relative col-start-1 col-end-13 row-start-5 row-end-9 sm:col-start-1 sm:col-end-7 sm:row-start-1 sm:row-end-7 rounded-xl overflow-hidden">
              {/* <AspectRatio ratio={1 / 1}> */}
              <ExternalImage
                src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502535/folder/vrzoeqcy7ly5dd48rfw3.png"
                alt=""
                fill
              />
              {/* </AspectRatio> */}
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer id={Keys.SECTION_5} className="my-20">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden min-h-[375px]">
          <div
            ref={(element) => sectionRefs?.current.push(element!)}
            className="w-full md:w-2/4 bg-brand bg-[url('/3d-morph-lines.png')] flex flex-col justify-center bg-no-repeat bg-cover bg-center py-10 px-6 md:px-10"
          >
            <h3 className="text-3xl md:text-4xl text-[#FFCB01] font-extrabold font-poppins mb-3 md:mb-6 w-fit">
              Our Vision
            </h3>
            <p className="text-white text-base md:text-lg">
              To be the preferred digital technology payment platform provider in Sub-Saharan Africa
            </p>
          </div>
          <div className="w-full h-[375px] md:w-2/4 relative">
            <ExternalImage
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502525/folder/oub1ooc5wkrf7ahcfxuh.png"
              alt=""
              fill
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id={Keys.SECTION_6}
        ref={(element) => sectionRefs?.current.push(element!)}
        className="my-20"
      >
        <p className="mb-1 text-base text-brand text-center">Core Values</p>
        <h2 className="text-3xl md:text-4xl text-center font-poppins mb-12">
          The things we stand for
        </h2>
        <div className="flex flex-col sm:grid gap-3 grid-rows-[repeat(12,minmax(0,65px))] grid-cols-12 lg:grid-rows-12">
          {CoreValues.map((value, idx) => (
            <Values
              key={idx}
              index={idx}
              title={value?.title}
              content={value?.content}
              image={value?.image}
              className={value?.className}
            />
          ))}
          <div className="col-start-1 col-end-9 row-start-9 row-end-13 lg:col-start-5 lg:col-end-10 lg:row-start-7 lg:row-end-13 lg:ml-4">
            <p className="text-base mb-5 mt-4 sm:mt-6">
              We understand that to deliver value continuously and to support the customers –
              financial institutions and emerging customers, we must ask the customers, “How can we
              help them get their job done?”
            </p>
            <Button
              type="button"
              size="sm"
              className="bg-brand text-white text-sm"
              rightElement={<Arrow className="ml-2 w-4 h-4" />}
            >
              Request for Demo
            </Button>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id={Keys.SECTION_7}
        className="min-h-screen"
        ref={(element) => sectionRefs?.current.push(element!)}
      >
        <h2 className="text-3xl md:text-4xl font-poppins mb-12 leading-tight">
          Cutting-edge <br /> Innovative Offerings
        </h2>
        <Offerings />
      </SectionContainer>
      <SectionContainer id={Keys.SECTION_8} className="my-20 min-h-[300px]">
        <div className="border border-[#FFCB01] rounded-xl overflow-hidden flex items-center flex-col md:flex-row">
          <div className="w-full md:w-2/4 py-8 px-8 lg:px-12">
            <div
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  className: 'mb-3 border-brand border'
                })
              )}
            >
              Contact Us
            </div>
            <h5 className="text-[#014751] text-2xl font-bold mb-4">Get In Touch</h5>
            <div className="text-base text-[#445D65]">
              <p className="mb-1">
                Please call us on +234 809 944 0021 or email info@insurtechit.com
              </p>
              <p>
                Visit our office at the address below: 2 Dele Omodara Close off Titlayo Adedoyin
                Close Omole Phase 1
              </p>
            </div>
          </div>
          <div className="w-full h-[300px] md:w-2/4 relative">
            <ExternalImage
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710502550/folder/pr76auuuyd5mfe9lmli2.png"
              alt=""
              fill
              objectFit="object-cover"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer
        id={Keys.SECTION_9}
        ref={(element) => sectionRefs?.current.push(element!)}
        className="my-20"
      >
        <AspectRatio ratio={16 / 9}>
          <div className="bg-brand px-8 py-12 text-white bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-center w-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden">
            <h4 className="text-3xl md:text-4xl mb-1 md:mb-3 text-center">Book a demo now</h4>
            <p className="mb-3 text-lg md:text-xl text-center font-medium">
              Let’s demonstrate how we can add value to your company
            </p>
            <Button
              type="button"
              size="lg"
              className="bg-white text-brand text-base"
              rightElement={<Arrow className="ml-2 w-4 h-4" />}
            >
              Request for Demo
            </Button>
          </div>
        </AspectRatio>
      </SectionContainer>
    </main>
  );
}
