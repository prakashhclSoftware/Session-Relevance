import React from 'react';
import { Box } from '@mui/material';
import BarChart from './BarChart';

const Feed = () => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 2,
  };

  const barChartContainerStyle = {
    width: 400,
  };

  return (
    <Box style={boxStyle}>
      <div style={barChartContainerStyle}>
        <BarChart />
      </div>
      <div style={barChartContainerStyle}>
        <BarChart />
      </div>
      <div style={barChartContainerStyle}>
        <BarChart />
      </div>
    </Box>
  );
};

export default Feed;
