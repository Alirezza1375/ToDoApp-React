import React, { useState, useContext } from "react";

const clickContext = React.createContext();

export const ClickProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState({
    createButton: false,
    listButton: false,
    taskItems: false,
  });

  const toggleClick = (buttonType) => {
    setIsClicked((prev) => ({
      ...prev,
      [buttonType]: !prev[buttonType],
    }));
  };

  return (
    <clickContext.Provider value={{ isClicked, toggleClick }}>
      {children}
    </clickContext.Provider>
  );
};

export const useClick = () => useContext(clickContext);
