import React, { MouseEventHandler, useEffect, useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

type CustomSelectType = {
  selectLabel: string;
  values: any[];
  labels: string[];
  onSelect?: (value: any, label: string) => any;
};

const OrderbyDropdown: React.FC<CustomSelectType> = ({
  selectLabel,
  values,
  labels,
  onSelect,
}) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [selecValue, setSelecValue] = useState<null | any>(values[0]);
  const [selecLabel, setSelecLabel] = useState<null | any>(labels[0]);
  if (onSelect) {
    onSelect(values[0], labels[0]);
  }

  const handleSelect = (i: any) => {
    setSelecValue(values[i]);
    setSelecLabel(labels[i]);
    if (onSelect) {
      onSelect(selecValue, selecLabel);
    }
  };

  useEffect(() => {
    setShowDropdown(false);
  }, [selecValue]);

  return (
    <div
      className={"relative min-w-[10rem] sm:min-w-[15rem] flex flex-col"}
      onClick={() => setShowDropdown((oldValue) => !oldValue)}
    >
      <span className={"w-fit text-slate-700 self-end"}>{selectLabel}</span>
      <div className={"grid grid-cols-[auto_min-content] gap-1 items-center"}>
        <div className="h-10 rounded cursor-pointer relative bg-pink-500 w-full sm:w-1/2 md:w-1/3 justify-self-end">
          <VscFoldDown
            className={`transition duration-500 h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-white stroke-1 ${
              showDropdown ? "rotate-180" : ""
            }`}
          />

          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-xs sm:text-base">
            {selecLabel}
          </span>
          <ul
            className={`duration-200 z-50 w-full mt-1 absolute top-full bg-pink-100 rounded 
        ${showDropdown ? "block" : "hidden"} 
        `}
          >
            {labels.map((l, i) => (
              <li
                key={i}
                className="p-3 text-pink-500 hover:bg-pink-200 first:rounded-t last:rounded-b"
                onClick={() => handleSelect(i)}
              >
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={
            "w-10 h-10 rounded cursor-pointer relative bg-pink-500 text-white flex justify-center items-center"
          }
        >
          <FaSortAmountDown />
        </div>
      </div>
    </div>
  );
};

export default OrderbyDropdown;
