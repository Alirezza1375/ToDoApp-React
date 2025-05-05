import { useClick } from "../Context/clickContext";
import SetUpCardSection from "./SetUpCardSection";
import AddCardSection from "./AddCardSection";
import { useState } from "react";
import { useCard } from "../Context/CardsContext";

export default function List() {
  const { cardList, setCardList } = useCard();
  const { isClicked, toggleClick } = useClick();

  return (
    <main className="flex items-center justify-center h-screen">
      <section>
        <div className="card-container">
          <div className="block card-box w-[280px]  border border-black bg-[#101204]">
            <div className="card-header-container flex justify-between w-full p-1.5">
              <div className="w-[80%]">
                <span className="text-[17px] text-[#b6c2cf] font-bold">
                  To-Do
                </span>
              </div>
              <div className="w-[20%] flex justify-center">
                <span className="font-extrabold cursor-pointer text-[#b6c2cf]">
                  ...
                </span>
              </div>
            </div>
            <div id="addedCards" className="">
              {cardList.length > 0
                ? cardList.map((card, index) => (
                    <li
                      key={index}
                      className="text-white list-none border border-t-white py-1 px-2 my-0.5"
                    >
                      Card Title: {card.title}
                    </li>
                  ))
                : null}
            </div>
            <div>
              {isClicked.addCard ? <SetUpCardSection /> : <AddCardSection />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* <ol className="flex flex-auto overflow-x-hidden overflow-y-auto list-none gap-y-2 w-full h-full">
              <li className="">
                <div className=""></div>
              </li>
            </ol>  */
