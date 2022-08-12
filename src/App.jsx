import React, { useEffect } from 'react';
import { useStateContext } from './contexts/ContextProvider';

import { Navbar, Sidebar } from './components';
import './App.css';
import Routers from './components/Routes';

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div className='flex w-full'>
      <div
        className={`${
          activeMenu ? 'w-52' : 'w-24'
        } fixed sidebar justify-center bg-white`}
      >
        <Sidebar />
      </div>
      <div
        className={`divide-y bg-main-bg overflow-none flex-grow md:mx-6 p-4   divide-solid ${
          activeMenu ? 'md:ml-52' : 'md:ml-24'
        }`}
      >
        <Navbar />
        <Routers />
      </div>
    </div>
  );
}

export default App;
