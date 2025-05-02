import React, { useContext, useState } from "react";
import { useDateTime } from "./dateTimeContext";

const taskFormContext = React.createContext();

export const FormDataProvider = ({ children }) => {
  const [allData, setAllData] = useState({});
  const { dateString, timeString } = useDateTime();

  const taskForm = (formData) => {
    const data = Object.fromEntries(formData);
    // data is an object
    setAllData({
      ...data,
      date: dateString,
      time: timeString,
    });
    console.log(allData);
  };

  return (
    <taskFormContext.Provider value={{ allData, taskForm }}>
      {children}
    </taskFormContext.Provider>
  );
};

export const useTaskForm = () => useContext(taskFormContext);
