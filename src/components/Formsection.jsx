import CustomeDateTimePicker from "./DateTimePicker";
import { useTaskForm } from "../contexts/taskFormContext";

export default function Formsection() {
  const { taskForm } = useTaskForm();

  return (
    <div className="border-4 border-black w-[600px] h-[520px] transform transition-all duration-500">
      <div>
        <p className="flex justify-center my-[15px] p-[5px] text-2xl font-bold ">
          Create your custome ToDo Object
        </p>
      </div>
      <form action={taskForm} className="mt-[15px] flex flex-col items-center">
        <label className="font-extrabold mb-0.5" htmlFor="taskTitle">
          Title:
        </label>
        <input
          className="border-2 border-black h-10 w-[270px] rounded-full"
          id="taskTitle"
          type="text"
          name="taskTitle"
          placeholder=" e.g. Shopping"
        />
        <label className="font-extrabold mb-0.5 mt-5">
          <CustomeDateTimePicker />
        </label>
        <fieldset className="mt-5 flex flex-col gap-2 border border-black w-[270px] py-3">
          <legend>Priority</legend>
          <label className="ml-1 flex gap-2 mt-1">
            <input type="radio" name="taskPriority" value="high" />
            High
          </label>
          <label className="ml-1 flex gap-2">
            <input type="radio" name="taskPriority" value="medium" />
            Medium
          </label>
          <label className="ml-1 flex gap-2">
            <input type="radio" name="taskPriority" value="low" />
            Low
          </label>
        </fieldset>
        <button
          className="my-7 border border-black py-2 px-4 cursor-pointer rounded-full hover:font-extrabold
                    active:transition-all active:shadow-2xl active:scale-[0.95] ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
