import React, { useState } from "react";

interface HeaderType extends React.PropsWithChildren {}

const Header: React.FC<HeaderType> = ({ children }) => {
  return (
    <header className="w-full py-6 flex flex-col justify-center items-center">
      <h1 className={"text-center text-4xl text-pink-800 md:text-4xl"}>
        {children}
      </h1>
    </header>
  );
};

export default Header;
