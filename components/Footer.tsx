"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15 mt-12">
      <div className="bg-grayBackground rounded-md">
        <div className="px-5 pt-2 flex justify-between items-center">
          <Image
            src="/RentFlowLogo.svg"
            alt="RentFlow Logo"
            width={120}
            height={60}
          />
          <div className="flex items-center gap-2">
            <span>All Rights Reserved.</span>
            <span>© 2024</span>
            <Link href="" passHref legacyBehavior>
              <a target="_blank" className="underline underline-offset-2" rel="noopener noreferrer">
                RentFlow
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;