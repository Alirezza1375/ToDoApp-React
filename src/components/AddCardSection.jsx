import { useClick } from "../Context/clickContext";

export default function AddCardSection() {
  const { isClicked, toggleClick } = useClick();

  return (
    <div className="add-card-section">
      <div className="w-full h-full overflow-hidden p-2 border-t border-white">
        <button
          onClick={() => toggleClick("addCard")}
          className="w-full h-full cursor-pointer flex justify-center gap-1.5"
        >
          <h1 className="text-[#b6c2cf]">+</h1>
          <span className="text-[#b6c2cf]">Add Card</span>
        </button>
      </div>
    </div>
  );
}
