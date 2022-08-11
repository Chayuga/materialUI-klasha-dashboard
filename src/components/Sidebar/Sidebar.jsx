import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { links } from '../Sidebar/links';
import klashaFullLogo from '../../assets/logo/klasha__logo.svg';
import klashaKLogo from '../../assets/logo/klasha-k.svg';

import { arrowLeft, arrowRight } from '../../assets/icons';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-[#EF2C5A] text-md';

  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md text-black hover:text-gray-500';

  return (
    <div className='p-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10'>
      <div className='flex flex-col justify-between items-center m-8'>
        <Link
          to='/'
          onClick={() => {}}
          className='flex justify-center item-center gap-3 m-3 mt-4  '
        >
          {activeMenu ? (
            <img src={klashaFullLogo} alt='klasha logo' />
          ) : (
            <img src={klashaKLogo} alt='klasha logo' />
          )}
        </Link>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 '>{item.title}</p>
              {item.links.map((link) => (
                <NavLink
                  to={link.path ? `/${link.path}` : '#'}
                  key={link.name}
                  onClick={() => {}}
                  className={({ isActive }) => [
                    isActive ? activeLink : normalLink,
                    !link.path && normalLink,
                  ]}
                >
                  {link.icon}
                  {activeMenu && <span>{link.name}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        {/* lower hide button */}
        <button
          type='button'
          onClick={(prevMenu) => setActiveMenu((prevMenu) => !prevMenu)}
          className='flex outline rounded-md p-3 hover:bg-light-gray mt-20'
        >
          {activeMenu ? (
            <>
              <img src={arrowLeft} alt='arrow left' />
              <span>Hide panel</span>
            </>
          ) : (
            <>
              <img src={arrowRight} alt='arrow right' />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
