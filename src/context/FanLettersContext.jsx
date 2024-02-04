import React, { createContext, useContext, useState, useEffect } from 'react';
import fakeData from '../shared/fakeData'

const FanLettersContext = createContext();

export const FanLettersProvider = ({ children }) => {
  const [fanLetters, setFanLetters] = useState([]);

  useEffect(() => {
    setFanLetters(fakeData);
  }, []);

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
