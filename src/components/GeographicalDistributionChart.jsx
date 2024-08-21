// src/components/GeographicalDistributionChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register components required for the Bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GeographicalDistributionChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('https://database-b.onrender.com/api/customers/geographical')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item._id);
        const values = data.map(item => item.count);

        setData({
          labels,
          datasets: [
            {
              label: 'Customer Distribution by City',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>Geographical Distribution of Customers</h2>
      <Bar data={data} />
    </div>
  );
};

export default GeographicalDistributionChart;
