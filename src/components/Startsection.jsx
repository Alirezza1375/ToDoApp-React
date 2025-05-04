import Formsection from "./Formsection";
import TaskListSection from "./TaskListSection";
import { useClick } from "../contexts/clickContext";
import { useTaskForm } from "../contexts/taskFormContext";

export default function Startsection() {
  const { isClicked, toggleClick } = useClick();
  const { taskList } = useTaskForm();

  return (
    <div
      id="startsection-main-div"
      className={`flex w-full h-full ${
        taskList ? "justify-between" : "justify-center"
      }`}
    >
      <div
        id="create-button-and-form-section"
        className={`w-1/2 ${isClicked.createButton ? "h-full" : "h-[300px]"} ${
          taskList.length > 0 ? "w-1/2" : "w-full"
        } border border-black bg-blue-50 flex flex-col items-center`}
      >
        <h1 className="my-3 text-2xl font-bold">
          Create your custome ToDo object
        </h1>
        <div
          id="createToDo-button-container"
          className="flex items-center justify-center h-full"
        >
          <button
            id="create-ToDo-button"
            onClick={() => toggleClick("createButton")}
            type="button"
            className="cursor-pointer border border-black py-3 px-4 rounded-md bg-blue-200 font-bold
                    hover:bg-blue-300 hover:text-white hover:font-extrabold active:transition-all 
                    active:scale-[0.95] active:shadow-2xl active:duration-100 active:ease-in-out"
          >
            {isClicked.createButton ? "Close tab" : "Create WhatToDo"}
          </button>
        </div>
        <div id="form-container">
          {isClicked.createButton ? <Formsection /> : null}
        </div>
      </div>
      {taskList?.length > 0 && (
        <div
          id="taskList-and-listButton-section"
          className={`w-1/2 border border-black ${
            isClicked.listButton ? "h-full" : "h-[300px]"
          } bg-blue-50 flex flex-col items-center justify-center`}
        >
          <h1 className="my-3 text-2xl font-bold">Your Tasks List</h1>
          <div
            id="ToDoList-button-container"
            className="flex items-center justify-center h-full"
          >
            <button
              id="ToDo-list-button"
              onClick={() => toggleClick("listButton")}
              type="button"
              className="cursor-pointer border border-black py-3 px-4 rounded-md bg-blue-200 font-bold
                    hover:bg-blue-300 hover:text-white hover:font-extrabold active:transition-all active:scale-[0.95] active:shadow-2xl active:duration-100 active:ease-in-out "
            >
              {isClicked.listButton ? "Close List" : "ToDo List"}
            </button>
          </div>
          <div id="taskList-container">
            {isClicked.listButton ? <TaskListSection /> : null}
          </div>
        </div>
      )}
    </div>
  );
}
