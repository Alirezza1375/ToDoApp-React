import React, { useState, useContext } from "react";
import dayjs from "dayjs";

const dateTimeContext = React.createContext();

export const DateTimeProvider = ({ children }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (newValue) => {
    setSelectedDateTime(newValue);
  };

  return (
    <dateTimeContext.Provider
      value={{
        selectedDateTime,
        handleDateTimeChange,
      }}
    >
      {children}
    </dateTimeContext.Provider>
  );
};

export const useDateTime = () => useContext(dateTimeContext);
