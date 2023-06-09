import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const renderAccessCell = ({ row: { access } }) => (
    <Box
      width="90%"
      m="0 auto"
      p="5px"
      display="flex"
      justifyContent="center"
      backgroundColor={
        access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
      }
      borderRadius="4px"
    >
      {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      {access === "manager" && <SecurityOutlinedIcon />}
      {access === "user" && <LockOpenOutlinedIcon />}
      <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: renderAccessCell,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Team" subtitle="Manage the Team Members" />
      </Box>
      <Box m="40px 0 0" height="70vh">
        <DataGrid
          sx={{ border: "none" }}
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
