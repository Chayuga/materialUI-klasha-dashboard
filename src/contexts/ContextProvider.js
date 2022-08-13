import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [fullMenu, setFullMenu] = useState(true);
  const [toggleOn, setToggleOn] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [onMobile, setOnMobile] = useState(true);

  const handleMobileMenu = () => {
    setOnMobile(true);
  };

  return (
    <StateContext.Provider
      value={{
        showMenu,
        setShowMenu,
        fullMenu,
        setFullMenu,
        toggleOn,
        setToggleOn,
        screenSize,
        setScreenSize,
        onMobile,
        setOnMobile,
        handleMobileMenu,
        mobileMenu,
        setMobileMenu
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
