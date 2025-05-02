import React, { useState, useContext } from "react";

const clickContext = React.createContext();

export const ClickProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <clickContext.Provider value={{ isClicked, toggleClick }}>
      {children}
    </clickContext.Provider>
  );
};

export const useClick = () => useContext(clickContext);
