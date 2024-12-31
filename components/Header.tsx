import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 pt-4">
      <div className="flex items-center">
        <Image
          src="/RentFlowLogo.svg"
          alt="Company Logo"
          width={200}
          height={200}
          className="mr-4"
        />
      </div>
    </header>
  );
};

export default Header;