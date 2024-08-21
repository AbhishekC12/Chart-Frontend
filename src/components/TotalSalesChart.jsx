// src/components/TotalSalesChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register components required for the Line chart
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const TotalSalesChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('https://database-b.onrender.com/api/sales/total?interval=day')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => new Date(item._id).toLocaleDateString());
        const values = data.map(item => item.totalSales);

        setData({
          labels,
          datasets: [
            {
              label: 'Total Sales',
              data: values,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>Total Sales Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default TotalSalesChart;
