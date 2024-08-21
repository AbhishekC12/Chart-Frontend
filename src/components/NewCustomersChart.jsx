// src/components/NewCustomersChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register components required for the Line chart
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const NewCustomersChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('https://database-b.onrender.com/api/customers/new?interval=day')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => new Date(item._id).toLocaleDateString());
        const values = data.map(item => item.newCustomers);

        setData({
          labels,
          datasets: [
            {
              label: 'New Customers',
              data: values,
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              fill: true,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>New Customers Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default NewCustomersChart;
