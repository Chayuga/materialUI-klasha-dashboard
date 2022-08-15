import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { summeryData } from '../utils';
// import { Card } from '../SalesCard/Card';

const SalesCard = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', paddingX: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {summeryData.map((data, index) => (
          <Box
            key={index}
            sx={{
              width: '16rem',
              height: '15rem',
              flexShrink: '0',
              border: '1px solid black',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: '1rem',
              margin: '1rem',
              color: 'black',
              backgroundColor: '#ffffff',
              '&:hover': { color: '#ffffff', backgroundColor: '#121212' },
            }}
          >
            <Typography variant='body2'>{data.range}</Typography>
            {data.graph && (
              <CardMedia
                component='img'
                height='auto'
                image={data.graph}
                alt='this week graph'
              />
            )}
            <Box>
              <Typography variant='body2'>{data.period}</Typography>

              <Typography variant='h5' sx={{ marginTop: '1rem' }}>
                {data.revenue}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default SalesCard;
