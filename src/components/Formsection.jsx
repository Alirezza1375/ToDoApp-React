import CustomeDateTimePicker from "./DateTimePicker";

export default function Formsection() {
  return (
    <div className="border-4 border-black w-[600px] h-[500px] transform transition-all duration-500">
      <div>
        <p className="flex justify-center my-[15px] p-[5px] text-2xl font-bold ">
          Create your custome ToDo Object
        </p>
      </div>
      <div className="flex flex-col items-start mx-[15px] ">
        <label className="font-extrabold mb-0.5" htmlFor="taskTitle">
          Title:
        </label>
        <input
          className="border-2 border-black h-10 w-[300px] rounded-full"
          id="taskTitle"
          type="text"
          name="taskTitle"
          placeholder=" e.g. Shopping"
        />
        <label className="font-extrabold mb-0.5 mt-3">
          Date & Time
          <CustomeDateTimePicker />
        </label>
      </div>
    </div>
  );
}
