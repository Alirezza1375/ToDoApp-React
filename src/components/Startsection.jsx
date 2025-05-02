import Formsection from "./Formsection";
import { useClick } from "../contexts/clickContext";

export default function Startsection() {
  const { isClicked, toggleClick } = useClick();

  return (
    <div className="flex flex-col items-center h-full my-[25px] gap-[5px]">
      <div>
        <button
          onClick={toggleClick}
          type="button"
          className="cursor-pointer border border-black h-[50px] w-[150px] rounded-md bg-blue-200 font-bold
                    hover:bg-blue-300 hover:text-white hover:font-extrabold active:transition-all active:scale-[0.95] 
                    active:shadow-2xl active:duration-100 active:ease-in-out"
        >
          {isClicked ? "Close tab" : "Create WhatToDo"}
        </button>
      </div>

      <div className="mt-[5px]">{isClicked ? <Formsection /> : null}</div>
    </div>
  );
}
