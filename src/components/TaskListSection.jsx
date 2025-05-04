import { useTaskForm } from "../contexts/taskFormContext";
import { useClick } from "../contexts/clickContext";
import { useState } from "react";

export default function TaskListSection() {
  const { taskList, setTaskList } = useTaskForm();
  const { isClicked, toggleClick } = useClick();

  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const openTask = (index) => {};

  return (
    <div className="border-4 border-black w-full h-full transform transition-all duration-500 my-3 px-3">
      <ul id="task-list">
        {taskList?.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between my-1.5 shadow-2xl ${
              task.priority === "high" ? "bg-red-500" : "bg-blue-50"
            } ${task.priority === "medium" ? "bg-orange-400" : "bg-blue-50"} ${
              task.priority === "low" ? "bg-green-400" : "bg-blue-50"
            }`}
          >
            <button
              onClick={() => toggleClick("taskItems")}
              className="cursor-pointer border border-black my-2 mx-1.5 p-1.5 rounded-full active:transition-all 
                                active:scale-[0.95] active:ease-in-out active:shadow-md bg-blue-50 w-[100px] h-[50px]"
            >
              {task.title}
            </button>
            {isClicked.taskItems && (
              <div>
                <p>{`Title: ${task.title}`}</p>
                <p>{`Description: ${task.description}`}</p>
                <p>{`Date & Time: ${task.date}, ${task.time}`}</p>
              </div>
            )}
            <button
              onClick={() => handleDeleteTask(index)}
              className="cursor-pointer active:transition-all active:scale-[0.95] ease-in-out 
                               shadow-md bg-blue-50"
            >
              <img
                src="/src/assets/images/bin-icon.jpg"
                alt="Bin icon for deleting task button"
                className="h-[20px] w-[20px]"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
