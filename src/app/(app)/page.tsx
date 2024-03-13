"use client";

import { Arrow } from "@/assets";
import Offerings from "@/components/offerings";
import SectionContainer from "@/components/section-container";
import Stats from "@/components/stats";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import Values from "@/components/values";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CoreValues, OurStats, Partners } from "../constants";

export default function Home() {
  const row =
    "col-start-1 col-end-5 col-start-5 col-end-9 col-start-9 col-end-13 row-start-1 row-end-7 row-start-7 row-end-13";

  return (
    <main className="overflow-hidden">
      <SectionContainer className="bg-brand text-white pt-[125px] pb-[100px] min-h-screen bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-top">
        <div className="flex justify-between items-center">
          <div className="w-2/4">
            <h1 className="text-6xl leading-[1.1] font-poppins font-medium mb-4">
              Digital Technology Platform for Emerging Markets.
            </h1>
            <p className="text-lg mb-8">
              We provide you with a hassle-free, reliable, and customized
              digital technology platform to deliver value to your customers.
            </p>
            <div className="flex gap-6 items-center">
              <Button
                type="button"
                size="lg"
                className="bg-white text-brand text-base"
                rightElement={<Arrow className="ml-2 w-4 h-4" />}
              >
                Request for Demo
              </Button>
              <Button
                type="button"
                size="lg"
                className="text-base backdrop-blur-[2px] bg-[#DFEFFE]/15"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="w-[45%] z-0 relative">
            <Image
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166156/folder/insurtechit-48.png"
              alt=""
              fill
              className="absolute -z-10 translate-x-2/4 scale-125"
            />
            <Image
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166160/folder/insurtechit-52.png"
              alt="insurtechit"
              height={804}
              width={804}
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="py-20">
        <h2 className="text-5xl text-center font-poppins mb-8">
          Our Strategic Partners
        </h2>
        <div className="flex justify-between items-center gap-4 max-w-[1000px] mx-auto w-full">
          {Partners.map((partner) => (
            <Image
              key={partner?.alt}
              src={partner?.image}
              alt={partner?.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="py-20">
        <p className="mb-1 text-base text-brand text-center">
          Our achievement in the journey depicted in numbers
        </p>
        <h2 className="text-5xl text-center font-poppins mb-8">
          Some count that matters
        </h2>
        <div className="bg-brand px-8 py-20 rounded-xl text-white flex items-center justify-between gap-6 bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-center">
          {OurStats.map((stat, idx) => (
            <Stats
              key={idx}
              prefix={stat.prefix}
              about={stat.about}
              figure={stat.figure}
            />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="py-20">
        <p className="mb-1 text-base text-brand text-center">About Us</p>
        <h2 className="text-5xl text-center font-poppins mb-12">
          Enabling Financial Institutions and other <br /> players to reach the
          Banked and Unbanked
        </h2>
        <div className="flex items-center justify-between gap-8">
          <div className="w-2/4">
            <Image
              className="mb-6"
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166151/folder/insurtechit-26.png"
              alt="our story"
              width={75}
              height={75}
            />
            <h3 className="text-4xl font-medium font-poppins mb-4">
              Our Story
            </h3>
            <div className="text-lg">
              <p className="mb-6">
                We understand that to deliver value continuously and to support
                the customers – financial institutions and emerging customers,
                we must ask the customers, “How can we help them get their job
                done?” <br /> With this question in mind, we set out to provide
                and enable financial transactions for emerging customers and
                address their pain points by leveraging technology as an
                enabler.
              </p>
              <p>
                We envision a world where we can be confident in helping
                customers provide value through disruptive strategy.
              </p>
            </div>
          </div>
          <div className="w-[45%] grid gap-3 grid-cols-12 grid-rows-12 h-[450px]">
            <div className="relative col-start-7 col-end-13 row-start-1 row-end-13 rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710324076/folder/insurtechit.png"
                alt=""
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative col-start-1 col-end-7 row-start-7 row-end-13 rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710322952/folder/insurtechit.png"
                alt=""
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative col-start-1 col-end-7 row-start-1 row-end-7 rounded-xl overflow-hidden">
              {/* <AspectRatio ratio={1 / 1}> */}
              <Image
                src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710322955/folder/insurtechit-2.png"
                alt=""
                fill
                objectFit="cover"
              />
              {/* </AspectRatio> */}
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="py-20">
        <div className="flex rounded-3xl overflow-hidden">
          <div className="w-2/4 bg-brand bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-center py-28 px-10">
            <h3 className="text-5xl text-[#FFCB01] font-extrabold font-poppins mb-6 w-fit">
              Our Vision
            </h3>
            <p className="text-white text-lg">
              To be the preferred digital technology payment platform provider
              in Sub-Saharan Africa
            </p>
          </div>
          <div className="w-2/4 relative">
            <Image
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166147/folder/insurtechit-7.png"
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="py-20">
        <p className="mb-1 text-base text-brand text-center">Core Values</p>
        <h2 className="text-5xl text-center font-poppins mb-12">
          The things we stand for
        </h2>
        <div className="grid gap-3 grid-cols-12 grid-rows-12">
          {CoreValues.map((value, idx) => (
            <Values
              key={idx}
              title={value?.title}
              content={value?.content}
              image={value?.image}
              className={value?.className}
            />
          ))}
          <div className="col-start-5 col-end-10 row-start-7 row-end-13 ml-4">
            <p className="text-base mb-5 mt-6">
              We understand that to deliver value continuously and to support
              the customers – financial institutions and emerging customers, we
              must ask the customers, “How can we help them get their job done?”
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
      <SectionContainer>
        <h2 className="text-5xl font-poppins mb-12 leading-tight">
          Cutting-edge <br /> Innovative Offerings
        </h2>
        <Offerings />
      </SectionContainer>
      <SectionContainer className="py-20">
        <div className="border border-[#FFCB01] rounded-xl overflow-hidden flex gap-4">
          <div className="w-2/4 py-16 px-12">
            <div
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "mb-3 border-brand border-[1.5px]",
                })
              )}
            >
              Contact Us
            </div>
            <h5 className="text-[#014751] text-2xl font-bold mb-4">
              Get In Touch
            </h5>
            <div className="text-base text-[#445D65]">
              <p className="mb-1">
                Please call us on +234 809 944 0021 or email
                info@insurtechit.com
              </p>
              <p>
                Visit our office at the address below: 2 Dele Omodara Close off
                Titlayo Adedoyin Close Omole Phase 1
              </p>
            </div>
          </div>
          <div className="w-2/4 relative">
            <Image
              src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166147/folder/insurtechit-9.png"
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="py-20">
        <AspectRatio ratio={16 / 9}>
          <div className="bg-brand text-white bg-[url('/3d-morph-lines.png')] bg-no-repeat bg-cover bg-center w-full min-h-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden">
            <h4 className="text-5xl mb-3">Book a demo now</h4>
            <p className="mb-3 text-xl font-medium">
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
