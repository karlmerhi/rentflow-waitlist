"use client";

import Link from 'next/link';
import config from '@/config/general';

const Form = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link href={config.subscribeForm} passHref legacyBehavior>
        <a
          className="bg-primary text-white font-semibold py-3 px-6 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Access
        </a>
      </Link>
    </div>
  );
};

export default Form;