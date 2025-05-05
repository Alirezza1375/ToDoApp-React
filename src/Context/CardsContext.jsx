import React, { useContext, useState } from "react";
import { useClick } from "./clickContext";

const cardContext = React.createContext();

export const CardProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(null);
  const [cardList, setCardList] = useState([]);
  const { setIsClicked } = useClick();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddCard = () => {
    const newCard = {
      title: inputValue,
    };
    if (!inputValue) {
      alert("Card title should not be empty");
    } else {
      setCardList((prev) => [...prev, newCard]);
      setInputValue(null);
      setIsClicked((prev) => ({ ...prev, ["addCard"]: !prev["addCard"] }));
    }
  };

  return (
    <cardContext.Provider value={{ cardList, handleChange, handleAddCard }}>
      {children}
    </cardContext.Provider>
  );
};

export const useCard = () => {
  return useContext(cardContext);
};
