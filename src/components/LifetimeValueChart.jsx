// src/components/LifetimeValueChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register components required for the Line chart
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LifetimeValueChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('https://database-b.onrender.com/api/customers/lifetime-value')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => new Date(item._id).toLocaleDateString());
        const values = data.map(item => item.totalLifetimeValue);

        setData({
          labels,
          datasets: [
            {
              label: 'Customer Lifetime Value by Cohort',
              data: values,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>Customer Lifetime Value by Cohorts</h2>
      <Line data={data} />
    </div>
  );
};

export default LifetimeValueChart;
