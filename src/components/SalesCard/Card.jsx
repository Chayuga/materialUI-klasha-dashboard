import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

export const Card = ({ graph, rangeDate, period, totalRevenue }) => {
  return (
    <Box
      sx={{
        width: '16rem',
        height: '15rem',
        border: '1px solid black',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '1rem',
        color: 'black',
        backgroundColor: '#ffffff',
        '&:hover': { color: '#ffffff', backgroundColor: '#00000f' }
      }}>
      <Typography variant="body2">{rangeDate}</Typography>
      <CardMedia component="img" height="auto" image={graph} alt="this week graph" />
      <Box>
        <Typography variant="body2">{period}</Typography>

        <Typography variant="h5" sx={{ marginTop: '1rem' }}>
          {totalRevenue}
        </Typography>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  rangeDate: React.propTypes.string,
  graph: React.propTypes.image,
  period: React.propTypes.string,
  totalRevenue: React.propTypes.string
};
