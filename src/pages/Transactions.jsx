import { Box } from '@mui/material';
import React from 'react';
import DisplayTable from '../components/DisplayTable/DisplayTable';

const Transactions = () => {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <DisplayTable />
    </Box>
  );
};

export default Transactions;
