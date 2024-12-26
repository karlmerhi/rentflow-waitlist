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
    <section className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16">
      <div className="xl:w-5/12 w-11/12 xl:my-40 mt-20 flex flex-col gap-6">
        <h1 className="font-normal text-2xl sm:text-4xl text-black">
          {title.text}
          {title.mark && (
            <span className="bg-primary px-2 rounded text-black whitespace-nowrap inline-block ml-1">
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
        src="/Vacation-2.jpg"
        alt="hero"
        width={3192}
        height={1684}
        className="rounded-sm xl:w-6/12 xl:max-w-[648px] w-11/12 h-max"
      />
    </section>
  );
};

export default Hero;
