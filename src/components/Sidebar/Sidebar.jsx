import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../../contexts/ContextProvider';

import { links } from '../Sidebar/links';
import klashaFullLogo from '../../assets/logo/klasha__logo.svg';
import klashaKLogo from '../../assets/logo/klasha-k.svg';

import UserDropDown from '../Navbar/UserDropDown';
import Languge from '../Navbar/Languge';

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    minimiseMenu,
    setMinimiseMenu,
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

  const activeLink =
    'flex items-center  pl-4 pt-3 pb-2.5 text-[#EF2C5A] text-md';

  const normalLink =
    'flex items-center  pl-4 pt-3 pb-2.5 text-md text-black hover:text-gray-500';

  return (
    <>
      {!minimiseMenu && (
        <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto bg-sidebar-bg'>
          <div>
            <div className='flex flex-col items-center mt-8'>
              <MdOutlineCancel />
              <Link
                to='/'
                className='flex justify-center item-center gap-3 mt-4 '
              >
                {activeMenu ? (
                  <img src={klashaFullLogo} alt='klasha logo' />
                ) : (
                  <img src={klashaKLogo} alt='klasha logo' />
                )}
              </Link>
            </div>
            <div className='flex flex-col items-center '>
              <div className='mt-10 '>
                {links.map((item) => (
                  <div key={item.title}>
                    <p className='text-gray-400 my-3 mt-4 '>
                      {activeMenu ? `${item.title1}` : `${item.title2}`}
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={link.path ? `/${link.path}` : '#'}
                        key={link.name}
                        className={({ isActive }) => [
                          isActive ? activeLink : normalLink,
                          !link.path && normalLink,
                        ]}
                      >
                        {activeMenu ? (
                          <div
                            className={`flex items-center {({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}
                          >
                            <p className='mr-2'>{link.iconActive}</p>
                            <p>{link.name}</p>
                          </div>
                        ) : (
                          <div
                            className={`flex items-center {({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}
                          >
                            <p className='mr-2'>{link.iconActive}</p>
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
              {/* lower hide button */}
              {!minimiseMenu && (
                <button
                  type='button'
                  onClick={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                  className='flex items-center justify-center outline rounded-md mx-5 p-3 hover:bg-light-gray mt-20'
                >
                  {activeMenu ? (
                    <>
                      <AiOutlineLeft />
                      <span className='ml-2'>Hide panel</span>
                    </>
                  ) : (
                    <>
                      <AiOutlineRight />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
