import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import GraphCard from '../components/GraphCard/GraphCard';
import AreaChart from '../components/Charts/AreaChart';

const Dashboard = () => {
  return (
    <div>
      <GraphCard />
      <AreaChart />
    </div>
  );
};

export default Dashboard;
