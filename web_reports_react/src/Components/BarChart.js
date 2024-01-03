// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const chartStyle = {
    width: '100%', 
  };

  return (
    <div style={chartStyle}>
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
    </div>
  );
}

export default BarChart;
