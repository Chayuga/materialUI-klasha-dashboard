import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Transactions } from '../pages';

const Routers = () => {
  return (
    <div>
      <Routes>
        {/* Main pages */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/balance' element='Balance' />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/analytics' element='Analytics' />
        <Route path='/marketing' element='Marketing' />
        <Route path='/exchange' element='Exchange rates' />

        {/* Accept payments */}
        <Route path='#' element='KlashaCheckout' />
        <Route path='#' element='Payment Links' />

        {/* Send payments */}
        <Route path='#' element='KlashaWire' />
      </Routes>
    </div>
  );
};

export default Routers;
