import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useStateContext } from '../../contexts/ContextProvider';

import DateToday from './date';
import Languge from './Languge';
import ToggleSwitch from './ToggleSwitch';
import UserDropDown from './UserDropDown';

const Navbar = () => {
  const {
    screenSize,
    setScreenSize,
    onMobile,
    setOnMobile,
    setMobileMenu,
    onTablet,
    setOnTablet,
    setFullMenu,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 640) {
      setOnMobile(true);
    }
    if (screenSize <= 768) {
      setFullMenu(false);
      setOnMobile(false);
    }
    if (screenSize <= 1024) {
      setFullMenu(true);
      setOnMobile(false);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between py-4 relative'>
      {onMobile && (
        <button
          type='button'
          onClick={() => setMobileMenu(true)}
          className='mx-3'
        >
          <AiOutlineMenu />
        </button>
      )}
      <div className='flex items-center '>
        Today: <DateToday />
      </div>
      <div className='flex justify-between py-4'>
        <div className='flex justify-end items-center flex-grow '>
          <div className='mx-6 '>
            <ToggleSwitch />
          </div>
          <div>
            <span>
              {onMobile ? 'Welcome back' : 'Hi'},
              <UserDropDown />
            </span>
          </div>
          {onMobile && (
            <div className='mx-6 '>
              <Languge />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
