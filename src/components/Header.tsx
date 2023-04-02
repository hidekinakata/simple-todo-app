import React from "react";

interface HeaderType extends React.PropsWithChildren {}

const Header: React.FC<HeaderType> = ({ children }) => {
  return (
    <header className="w-full py-6 flex justify-center">
      <h1 className={"text-4xl text-slate-900 font-black"}>{children}</h1>
    </header>
  );
};

export default Header;
