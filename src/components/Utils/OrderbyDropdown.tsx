import React, { useEffect, useState } from "react";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
import { VscFoldDown } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  actions as AppControl,
  OrderBy,
} from "../../store/features/appControl.store";

type CustomSelectType = {};

const OrderbyDropdown: React.FC<CustomSelectType> = ({}) => {
  const values = Object.values(OrderBy).filter((v) => Number(v) >= 0);

  const labels = Object.values(OrderBy).filter(
    (v) => !(Number(v) >= 0)
  ) as string[];
  const orderBy = useAppSelector((state) => state.AppControl.orderBy);
  const dispatch = useAppDispatch();

  const [showDropdown, setShowDropdown] = useState(true);
  const [selectValue, setSelectValue] = useState<null | any>(orderBy.order);
  const [selectLabel, setSelectLabel] = useState<null | any>(
    labels[orderBy.order]
  );
  const [ascending, setAscending] = useState(orderBy.asc);

  const handleSelect = (i: any) => {
    setSelectValue(values[i]);
    setSelectLabel(labels[i]);
  };

  useEffect(() => {
    dispatch(AppControl.setOrderBy({ order: selectValue, asc: ascending }));
  }, [ascending, selectValue]);

  useEffect(() => {
    setShowDropdown(false);
  }, [selectValue]);

  return (
    <div className={"relative min-w-[10rem] sm:min-w-[15rem] flex flex-col"}>
      <span className={"w-fit text-slate-700 self-end"}>Order by</span>
      <div className={"grid grid-cols-[auto_min-content] gap-1 items-center"}>
        <div
          className="h-10 rounded cursor-pointer relative bg-pink-500 w-full sm:w-1/2 md:w-1/3 justify-self-end"
          onClick={() => setShowDropdown((oldValue) => !oldValue)}
        >
          <VscFoldDown
            className={`transition duration-500 h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-white stroke-1 ${
              showDropdown ? "rotate-180" : ""
            }`}
          />

          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-xs sm:text-base">
            {selectLabel}
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
          onClick={() => setAscending((prevState) => !prevState)}
        >
          {ascending ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />}
        </div>
      </div>
    </div>
  );
};

export default OrderbyDropdown;
