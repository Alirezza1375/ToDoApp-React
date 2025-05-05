export default function Header() {
  return (
    <header className="flex items-center flex-col h-[150px] p-[30px] shadow-[4px_4px_10px_rgba(0,0,0,0.3)]">
      <div className="flex justify-center gap-2.5">
        <h1 className="text-blue-500 text-[30px] font-extrabold font-single-day">
          ToDo List
        </h1>
        <img
          className="w-9 h-12 bg-white"
          src="/src/assets/images/header-tick-icon.jpg"
          alt="Header tick icon"
        />
      </div>
    </header>
  );
}
