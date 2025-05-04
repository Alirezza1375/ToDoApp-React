import React, { useContext, useState } from "react";
import { useDateTime } from "./dateTimeContext";

const taskFormContext = React.createContext();

export const FormDataProvider = ({ children }) => {
  const { dateString, timeString } = useDateTime();
  const [taskList, setTaskList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    date: null,
    time: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = {
      ...formData,
      date: dateString,
      time: timeString,
    };
    setTaskList((prev) => [...prev, newFormData]);
    setFormData({
      title: "",
      description: "",
      priority: "",
      date: null,
      time: null,
    });
  };

  return (
    <taskFormContext.Provider
      value={{ taskList, handleSubmit, handleChange, formData, setTaskList }}
    >
      {children}
    </taskFormContext.Provider>
  );
};

export const useTaskForm = () => useContext(taskFormContext);
