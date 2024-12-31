"use client";

import { useMemo } from "react";
import Image from "next/image";
import config from "@/config/general";
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
  }, []);

  return (
    <section className="relative w-full h-[500px] mb-20">
      {/* Background image */}
      <Image
        src="/home.jpg"
        alt="hero"
        fill
        className="object-cover rounded-sm"
      />

      {/* Overlay text container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-white/50">
        <div className="w-full lg:w-1/2">
          <h1 className="font-semibold text-3xl sm:text-5xl text-black mb-4">
            {title.text}
            {title.mark && (
              <span className="underline text-[#323832] whitespace-nowrap inline-block ml-0 animate-pulse">
                {title.mark}
              </span>
            )}
            {title.remainder}
          </h1>
          <p className=" text-xl sm:text-3xl text-black">
            {config.contents.description}
          </p>
          <div className="mt-4">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;