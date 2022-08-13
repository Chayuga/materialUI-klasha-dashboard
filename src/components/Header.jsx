import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='mb-10'>
      <p className='text-xl font-body tracking-tight text-slate'>{title}</p>
    </div>
  );
};

export default Header;
