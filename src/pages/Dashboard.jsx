import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import GraphCard from '../components/GraphCard/GraphCard';

const Dashboard = () => {
  return (
    <div>
      <GraphCard />
    </div>
  );
};

export default Dashboard;
