import { useState, useContext } from "react";
import CustomeDateTimePicker from "./DateTimePicker";
import { useTaskForm } from "../contexts/taskFormContext";
import { useDateTime } from "../contexts/dateTimeContext";

export default function Formsection() {
  const { taskList, handleSubmit, handleChange, formData } = useTaskForm();
  return (
    <div className="border-4 border-black w-full h-full transform transition-all duration-500 my-3 px-3">
      <div>
        <p className="flex justify-center my-[15px] p-[5px] text-2xl font-bold ">
          What to Do ?
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-[15px] flex flex-col items-center gap-4"
      >
        <label className="font-extrabold mb-0.5">Title:</label>
        <input
          className="border-2 border-black h-10 w-[270px] rounded-full"
          value={formData.title}
          type="text"
          name="title"
          placeholder=" e.g. Shopping"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={formData.description}
          placeholder="Describe your task..."
          className="border border-black"
          onChange={handleChange}
        ></textarea>
        <label className="font-extrabold mb-0.5 mt-5">
          <CustomeDateTimePicker />
        </label>
        <fieldset className="mt-5 flex flex-col gap-2 border border-black w-[270px] py-3">
          <legend>Priority</legend>
          <label className="ml-1 flex gap-2 mt-1">
            <input
              type="radio"
              name="priority"
              value="high"
              onChange={handleChange}
            />
            High
          </label>
          <label className="ml-1 flex gap-2">
            <input
              type="radio"
              name="priority"
              value="medium"
              onChange={handleChange}
            />
            Medium
          </label>
          <label className="ml-1 flex gap-2">
            <input
              type="radio"
              name="priority"
              value="low"
              onChange={handleChange}
            />
            Low
          </label>
        </fieldset>
        <button
          type="submit"
          className="my-7 border border-black py-2 px-4 cursor-pointer rounded-full hover:font-extrabold
                    active:transition-all active:shadow-2xl active:scale-[0.95] ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
