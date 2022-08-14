import { Box } from '@mui/material';
import React from 'react';
import SalesCard from '../components/SalesCard/SalesCard';
import SalesGraph from '../components/SalesGraph/SalesGraph';

const Dashboard = () => {
  return (
    <Box>
      <SalesCard />
      <SalesGraph />
    </Box>
  );
};

export default Dashboard;
