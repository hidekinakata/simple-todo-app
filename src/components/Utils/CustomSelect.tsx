import React, { MouseEventHandler, useEffect, useState } from "react";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

type CustomSelectType = {
  selectLabel: string;
  values: any[];
  labels: string[];
  onSelect?: (value: any) => any;
};

const CustomSelect: React.FC<CustomSelectType> = ({
  selectLabel,
  values,
  labels,
  onSelect,
}) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [selected, setSelected] = useState<null | any>(values[0]);
  if (onSelect) {
    onSelect(values[0]);
  }

  const handleSelect = (value: any) => {
    setSelected(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  useEffect(() => {
    setShowDropdown(false);
  }, [selected]);

  return (
    <div
      className={"relative min-w-[15rem] flex flex-col"}
      onClick={() => setShowDropdown((oldValue) => !oldValue)}
    >
      <span className={"w-fit"}>{selectLabel}</span>
      <div className="w-full h-12 rounded cursor-pointer relative bg-pink-500">
        <VscFoldDown
          className={`transition duration-500 h-4 w-4 stroke-white absolute right-3 top-1/2 -translate-y-1/2 text-white ${
            showDropdown ? "rotate-180" : ""
          }`}
        />

        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-white">
          {selected}
        </span>
        <ul
          className={`duration-200 z-50 w-full mt-1 absolute top-full bg-teal-100 rounded 
        ${showDropdown ? "block" : "hidden"} 
        `}
        >
          {labels.map((l, i) => (
            <li
              key={i}
              className="p-3 text-teal-500 hover:bg-teal-200 first:rounded-t last:rounded-b"
              onClick={() => handleSelect(values[i])}
            >
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
