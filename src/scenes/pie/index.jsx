import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      </Box>
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Bar;
