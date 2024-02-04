import React, { createContext, useContext, useState } from 'react';

const FanLettersContext = createContext();

export const FanLettersProvider = ({ children }) => {
  const [fanLetters, setFanLetters] = useState([]);

  return (
    <FanLettersContext.Provider value={{ fanLetters, setFanLetters }}>
      {children}
    </FanLettersContext.Provider>
  );
};

export const useFanLetters = () => {
  const context = useContext(FanLettersContext);
  return context;
};
