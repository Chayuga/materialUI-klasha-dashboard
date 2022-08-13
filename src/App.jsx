import React from 'react';
import { useStateContext } from './contexts/ContextProvider';

import Routers from './Routes';
import { Box, Typography } from '@mui/material';

const App = () => {
  return (
    <Box>
      <Box>
        <Typography>Side Bar</Typography>
      </Box>
      <Box>
        <Typography>Nav Bar</Typography>
        <Routers />
      </Box>
    </Box>
  );
};

export default App;
