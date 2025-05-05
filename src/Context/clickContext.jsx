import React, { useState, useContext } from "react";

const clickContext = React.createContext();

export default function ClickProvider({ children }) {
  const [isClicked, setIsClicked] = useState({
    addCard: false,
    setUpCard: false,
    deleteSetUp: false,
  });
  const [inputValue, setInputValue] = useState(null);

  const toggleClick = (buttonType) => {
    setIsClicked((prev) => ({
      ...prev,
      [buttonType]: !prev[buttonType],
    }));
  };

  return (
    <clickContext.Provider value={{ isClicked, toggleClick, setIsClicked }}>
      {children}
    </clickContext.Provider>
  );
}

export const useClick = () => {
  return useContext(clickContext);
};
