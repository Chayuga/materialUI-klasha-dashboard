import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { links } from '../Sidebar/links';
import klashaLogo from '../../assets/logo/klasha__logo.svg';
import { arrowLeft } from '../../assets/icons';

const Sidebar = () => {
  const activeMenu = true;

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-[#EF2C5A] text-md';

  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md text-black hover:text-gray-500';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10'>
      {activeMenu && (
        <div className='m-8'>
          <div>
            <div className='flex justify-between items-center'>
              <Link
                to='/'
                onClick={() => {}}
                className='items-center gap-3 m-3 mt-4 flex '
              >
                <img src={klashaLogo} alt='klasha logo' />
              </Link>
            </div>
            <div className='mt-10'>
              {links.map((item) => (
                <div key={item.title}>
                  <p className='text-gray-400 m-3 mt-4 '>{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={() => {}}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* lower hide button */}
          <div className='flex  mb-0'>
            <button
              type='button'
              onClick={() => {}}
              className='flex outline rounded-md p-3 hover:bg-light-gray'
            >
              <img src={arrowLeft} alt='arrow left' />
              <span>Hide panel</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
