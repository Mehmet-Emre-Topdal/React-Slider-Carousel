import React, { createContext, useState, useContext } from "react";
import { peoples } from "./data";

const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState(peoples);
  const [currentPerson, setCurrentPerson] = useState(0);
  const [auto, setAuto] = useState(false);

  const prevSlide = () => {
    setCurrentPerson((i) => (i - 1) % people.length);
  };

  const nextSlide = () => {
    setCurrentPerson((i) => (i + 1) % people.length);
  };

  const toggleAutoSlide=()=>{
    setAuto(prev => !prev)
  }

  
  const contextValue = {
    people,
    prevSlide,
    nextSlide,
    currentPerson,
    auto,
    toggleAutoSlide
  };

 
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(MyContext);
