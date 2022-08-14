import React from 'react';
import { useStateContext } from './contexts/ContextProvider';

import Routers from './components/Routes';
import { Box, Typography } from '@mui/material';
import { Sidebar } from './components';

const App = () => {
  const { fullMenu } = useStateContext();
  {
    fullMenu ? '208px' : '96px';
  }

  return (
    <Box sx={{ display: 'flex', width: '100vw' }}>
      <Box sx={{ fullMenu, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Sidebar />
      </Box>
      <Box>
        <Typography>Nav Bar</Typography>
        <Routers />
      </Box>
    </Box>
  );
};

export default App;
