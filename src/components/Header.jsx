export default function Header() {
  return (
    <header className="flex items-center flex-col h-[150px] p-[30px] shadow-[4px_4px_10px_rgba(0,0,0,0.3)]">
      <div className="flex justify-center gap-2.5">
        <h1 className="text-blue-500 text-[30px] font-extrabold font-single-day">
          What To Do
        </h1>
        <img
          className="w-9 h-12 bg-white"
          src="/src/assets/images/header-tick-icon.jpg"
          alt="Header tick icon"
        />
      </div>
      <div className="flex justify-center gap-2.5">
        <h3 className="text-orange-500 text-[22px] font-semibold pt-2">
          What Not To Do
        </h3>
        <img
          src="/src/assets/images/header-cross-icon.jpg"
          className="w-9 h-12 bg-white"
          alt="header cross icon"
        />
      </div>
    </header>
  );
}
