// src/App.js
import React from 'react';
import TotalSalesChart from './components/TotalSalesChart';
import NewCustomersChart from './components/NewCustomersChart';
import RepeatCustomersChart from './components/RepeatCustomersChart';
import GeographicalDistributionChart from './components/GeographicalDistributionChart';
import LifetimeValueChart from './components/LifetimeValueChart';

const App = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <TotalSalesChart />
      <NewCustomersChart />
      <RepeatCustomersChart />
      <GeographicalDistributionChart />
      <LifetimeValueChart />
    </div>
  );
};

export default App;



