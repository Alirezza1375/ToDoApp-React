import React, { useState, useContext } from "react";
import dayjs from "dayjs";

const dateTimeContext = React.createContext();

export const DateTimeProvider = ({ children }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [dateString, setDateString] = useState(null);
  const [timeString, setTimeString] = useState(null);

  const handleDateTimeChange = (newValue) => {
    setSelectedDateTime(newValue);
    if (newValue) {
      setDateString(newValue.format("YYYY-MM-DD"));
      setTimeString(newValue.format("HH:mm:ss"));
    }
  };

  return (
    <dateTimeContext.Provider
      value={{
        selectedDateTime,
        handleDateTimeChange,
        dateString,
        timeString,
      }}
    >
      {children}
    </dateTimeContext.Provider>
  );
};

export const useDateTime = () => useContext(dateTimeContext);
