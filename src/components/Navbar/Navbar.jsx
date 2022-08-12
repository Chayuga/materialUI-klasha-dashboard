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
    minimiseMenu,
    setMinimiseMenu,
    mobileMenuOn,
    handleMobileMenu,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setMinimiseMenu(true);
    } else {
      setMinimiseMenu(false);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between py-4 relative'>
      {minimiseMenu && (
        <button type='button' onClick={handleMobileMenu} className='mx-3'>
          {!mobileMenuOn && <AiOutlineMenu />}
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
          {!minimiseMenu && (
            <>
              <div>
                <span>
                  Welcome back,
                  <UserDropDown />
                </span>
              </div>

              <div className='mx-6 '>
                <Languge />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
