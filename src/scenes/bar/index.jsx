import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      </Box>
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
