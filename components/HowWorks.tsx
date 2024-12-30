"use client";

import { Title } from "./Atoms";
import config from "@/config/general";
import { useState } from "react";

const HowWorks = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <div className="mb-24">
      <Title label="How it works" />
      <div className="flex justify-center"> {/* Center content horizontally */}
        <div className="w-11/12 xl:w-5/12 flex flex-col gap-5">
          {config.contents.howWorks.map((item, index) => {
            return (
              <div key={index} onClick={() => setActiveTitle(index)}>
                <div className="flex items-center gap-2 cursor-pointer">
                  <h4 className="flex-1 font-semibold text-lg text-black">
                    {index + 1}. {item.title}
                  </h4>
                  {/* Using SVG for the arrow */}
                  <svg
                    alt=""
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${activeTitle === index ? "rotate-180" : ""}`}
                    style={{ transition: "transform 0.3s ease" }}
                  >
                    <path
                      d="M1 1L6 5L11 1"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {activeTitle === index && (
                  <p className="text-base text-activeButton w-full pt-4 mb-2">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;