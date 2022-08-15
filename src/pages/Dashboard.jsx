import { Box, Typography } from '@mui/material';
import React from 'react';
import SalesCard from '../components/SalesCard/SalesCard';
import SalesGraph from '../components/SalesGraph/SalesGraph';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant='h6' sx={{ marginLeft: '1rem' }}>
        Sales Overview
      </Typography>
      <SalesCard />
      <SalesGraph />
    </Box>
  );
};

export default Dashboard;
