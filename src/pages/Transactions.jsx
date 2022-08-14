import { Typography } from '@mui/material';
import React from 'react';
import SalesGraph from '../components/SalesGraph/SalesGraph';

const Transactions = () => {
  return (
    <div>
      <Typography>Transactions table</Typography>
      <SalesGraph />
      <Typography>Transactions footer</Typography>
    </div>
  );
};

export default Transactions;
