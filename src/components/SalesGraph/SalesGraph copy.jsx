import * as React from 'react';
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
import { data } from '../utils';

const PREFIX = 'Demo';

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

export default class SalesGraph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <Paper>
        <Chart data={chartData} rootComponent={ChartRoot}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries name="" valueField="android" argumentField="year" />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
        </Chart>
      </Paper>
    );
  }
}
