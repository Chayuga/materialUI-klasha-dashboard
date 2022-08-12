import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [minimiseMenu, setMinimiseMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [toggleOn, setToggleOn] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [mobileMenuOn, setMobileMenuOn] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOn((prevMobileMenuState) => !prevMobileMenuState);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        toggleOn,
        setToggleOn,
        screenSize,
        setScreenSize,
        minimiseMenu,
        setMinimiseMenu,
        mobileMenuOn,
        setMobileMenuOn,
        handleMobileMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
