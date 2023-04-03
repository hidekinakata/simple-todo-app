import React from "react";

interface CustomButtomType extends React.ComponentProps<"button"> {}

const CustomButtom: React.FC<CustomButtomType> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={
          "bg-pink-500 text-slate-50 h-fit p-2 rounded-lg ease-in-out transition-all duration-150 hover:brightness-110 active:scale-105 " +
          className
        }
      >
        {children}
      </button>
    </>
  );
};

export default CustomButtom;
