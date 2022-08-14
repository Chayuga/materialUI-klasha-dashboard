import React, { useState } from 'react';
import { ArrowDownward } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { scalePoint } from 'd3-scale';
import { data7, data30 } from '../utils';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const PREFIX = 'klasha';

const classes = {
  chart: `${PREFIX}-chart`
};

const StyledChartRoot = styled(Chart.Root)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px'
  }
}));

const ChartRoot = (props) => <StyledChartRoot {...props} className={classes.chart} />;
const LegendRoot = (props) => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const LegendLabel = (props) => <Legend.Label {...props} sx={{ pt: 1 }} />;
const LegendItem = (props) => <Legend.Item {...props} sx={{ flexDirection: 'column' }} />;

const ExampleGraph = () => {
  const textBlack = '#000000';
  const textRed = '#EF2C5A';

  const [currency, setCurrency] = useState('');
  const [chartData, setChartData] = useState(data7);
  const [colorSeven, setColorSeven] = useState(textRed);
  const [colorThirty, setColorThirty] = useState(textBlack);

  const handleSevenDays = () => {
    setChartData(data7);
    setColorSeven(textRed);
    setColorThirty(textBlack);
  };

  const handleThirtyDays = () => {
    setChartData(data30);
    setColorSeven(textBlack);
    setColorThirty(textRed);
  };

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" sx={{ borderRight: 1 }}>
            Sales
          </Typography>
          <Button onClick={handleSevenDays} size="small" sx={{ color: colorSeven }}>
            7 days
          </Button>
          <Button onClick={handleThirtyDays} size="small" sx={{ color: colorThirty }}>
            30 days
          </Button>

          <FormControl sx={{ m: 1, minWidth: 80, border: '1px solid #000000' }}>
            <InputLabel id="demo-simple-select-autowidth-label">USD</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={currency}
              onChange={handleChangeCurrency}
              autoWidth
              label="USD">
              <MenuItem value={'usd'}>USD</MenuItem>
              <MenuItem value={'ngn'}>NGN</MenuItem>
              <MenuItem value={'kes'}>KES</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #000000',
            padding: '1.2rem'
          }}>
          <ArrowDownward /> <Typography>Download report</Typography>
        </Box>
      </Box>
      <Paper>
        <Chart data={chartData} rootComponent={ChartRoot}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries name="" valueField="revenue" argumentField="range" />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
        </Chart>
      </Paper>
    </Box>
  );
};

export default ExampleGraph;
