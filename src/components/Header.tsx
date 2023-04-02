import React, { useState } from "react";
import CustomInput from "./Utils/CustomInput";
import CustomButtom from "./Utils/CustomButtom";

interface HeaderType extends React.PropsWithChildren {}

const Header: React.FC<HeaderType> = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <header className="w-full py-6 flex flex-col justify-center items-center">
      <h1
        className={"text-lg text-slate-900 font-black sm:text-3xl md:text-4xl"}
      >
        {children}
      </h1>
    </header>
  );
};

export default Header;
