import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 xl:mb-10 bg-white shadow-md">
      <div className="flex items-center">
        <Image
          src="/RentFlowLogo.svg"
          alt="Company Logo"
          width={200}
          height={200}
          className="mr-4"
        />
      </div>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/company/rentflow-live/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 mr-4 transform transition-transform duration-200 hover:scale-125"
        >
          <FaLinkedin size={34} />
        </a>
      </div>
    </header>
  );
};

export default Header;