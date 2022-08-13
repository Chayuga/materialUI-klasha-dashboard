import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Transactions } from '../pages';

const Routers = () => {
  return (
    <div>
      <Routes>
        {/* Main pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/balance" element="Balance" />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element="Analytics" />
        <Route path="/marketing" element="Marketing" />
        <Route path="/exchange-rates" element="Exchange rates" />

        {/* Accept payments */}
        <Route path="/klasha-checkout" element="KlashaCheckout" />
        <Route path="/payment-links" element="Payment Links" />

        {/* Send payments */}
        <Route path="klasha-wire" element="KlashaWire" />
      </Routes>
    </div>
  );
};

export default Routers;
