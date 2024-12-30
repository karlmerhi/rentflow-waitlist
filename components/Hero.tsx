"use client";

import { useMemo } from "react";
import Image from "next/image";
// config
import config from "@/config/general";
// components
import Form from "./Form";

const Hero = () => {
  const title = useMemo(() => {
    const findIndex = config.contents.title.search(config.contents.markOfTitle);
    if (findIndex >= 0) {
      return {
        text: config.contents.title.slice(0, findIndex),
        mark: config.contents.title.slice(
          findIndex,
          findIndex + config.contents.markOfTitle.length
        ),
        remainder: config.contents.title.slice(
          findIndex + config.contents.markOfTitle.length
        ),
      };
    }
    return { text: config.contents.title, mark: null, remainder: "" };
  }, [config.contents]);

  return (
    <section className="flex flex-col xl:flex-row mb-20 items-center justify-between gap-8 xl:gap-16">
      <div className="xl:w-5/12 w-11/12 xl:my-20 mt-10 xl:mt-20 flex flex-col gap-6">
        <h1 className="font-normal text-2xl sm:text-4xl text-black">
          {title.text}
          {title.mark && (
            <span className="underline text-[#323832] whitespace-nowrap inline-block ml-0 animate-pulse">
              {title.mark}
            </span>
          )}
          {title.remainder}
        </h1>
        <p className="font-light text-lg sm:text-2xl text-black">
          {config.contents.description}
        </p>
        <Form />
      </div>
      <Image
        src="/Property Management.png"
        alt="hero"
        width={6912}
        height={3456}
        className="rounded-sm xl:w-6/12 xl:max-w-[1000px] w-11/12 h-max"
      />
    </section>
  );
};

export default Hero;
