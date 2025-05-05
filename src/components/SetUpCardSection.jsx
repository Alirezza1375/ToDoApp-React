import { useClick } from "../Context/clickContext";
import { useCard } from "../Context/CardsContext";

export default function () {
  const { isClicked, toggleClick, setIsClicked } = useClick();

  const { handleAddCard, handleChange } = useCard();

  return (
    <div className="textArea-container w-full p-1 flex flex-col">
      <input
        className="w-full text-white h-[40px] bg-[#626f86]"
        type="text"
        placeholder="pick a title or add link..."
        onChange={handleChange}
      />
      <div className="text-white my-2">
        <button
          onClick={handleAddCard}
          className="border border-white px-2 py-1 cursor-pointer hover:bg-[#626f86]"
        >
          Add Card
        </button>
        <button
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, ["addCard"]: !prev["addCard"] }))
          }
          className="border border-white ml-3 px-2 py-1 cursor-pointer hover:bg-[#626f86]"
        >
          X
        </button>
      </div>
    </div>
  );
}
