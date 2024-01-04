import React from "react";
import { Bar, Bubble } from "react-chartjs-2";


const chartStyle = {
  width: '100%',
};


function BarChart() {

  return (
    <div style={chartStyle}>
      <Bar
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Monthly Revenue",
              data: [200, 300, 400, 150, 340, 490],
            },
          ],
        }}
        options={{}}
      />
    </div>
  );
}

export function BubbleChart() {

  return (
    <div style={chartStyle}>
      <Bubble
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          xLabels: "Months",
          yLabels: "Revenue",
          datasets: [{
            label: "Monthly Revenue",
            data: [ 
              {x: 1, y: 200, r: 10}, 
              {x: 2, y: 300, r: 12}, 
              {x: 3, y: 400, r: 14}, 
              {x: 4, y: 150, r: 7},
              {x: 5, y: 340, r: 13},
              {x: 6, y: 490, r: 16}
            ]
          }]
        }}
        options={{}}
      />
    </div>
  );
}

export function HorizontalChart() {

  return (
    <div style={chartStyle}>
      <Bar
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Monthly Revenue",
              data: [200, 300, 400, 150, 340, 490],
            },
          ],
        }}
        options={{
          indexAxis: "y"
        }}
      />
    </div>
  );
}


export default BarChart;