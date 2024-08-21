// src/components/RepeatCustomersChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const RepeatCustomersChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('https://database-b.onrender.com/api/customers/repeat?interval=day')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => new Date(item._id).toLocaleDateString());
        const values = data.map(item => item.repeatCustomers);

        setData({
          labels,
          datasets: [
            {
              label: 'Repeat Customers',
              data: values,
              borderColor: 'rgba(255, 159, 64, 1)',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              fill: true,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>Repeat Customers Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default RepeatCustomersChart;
