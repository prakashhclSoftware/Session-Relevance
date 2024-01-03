import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from 'chart.js/auto'
function BarChart() {
  return (
    <Bar
      data={{
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "revenue",
            data: [200, 300, 400],
          },
        ],
      }}
    />
  );
}

export default BarChart;