import { Table } from "./Table";
import { Box } from "@mui/material";

function App() {
 return (
  <Box
   sx={{
    width: "100vw",
    height: "100vh",
    border: "2px solid red",
    boxSizing: "border-box",
    padding: 2,
   }}
  >
   <Table />
  </Box>
 );
}

export default App;
