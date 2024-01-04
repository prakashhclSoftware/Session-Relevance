import { Box } from '@mui/material';
import BarChart from './Charts';
import { BubbleChart, HorizontalChart } from './Charts';


const Feed = () => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: "30px 5px",
  };

  const barChartContainerStyle = {
    width: 450,
  };

  return (
    <Box style={boxStyle}>
      <div style={barChartContainerStyle}>
        <HorizontalChart />
      </div>
      <div style={barChartContainerStyle}>
        <BarChart />
      </div>
      <div style={barChartContainerStyle}>
        <BubbleChart />
      </div>
    </Box>
  );
};

export default Feed