import { DataGrid, GridColDef } from "@mui/x-data-grid";

const data = [
 {
  id: "1",
  firstName: "Test",
  lastName: "User",
  test: "Testing",
 },
];

const columns: GridColDef[] = [
 {
  field: "firstName",
  headerName: "First Name",
  flex: 1,
 },
 {
  field: "lastName",
  headerName: "Last Name",
  flex: 1,
 },
 {
  field: "test",
  headerName: "Test",
  flex: 1,
 },
];

export const Table = () => {
 return (
  <DataGrid
   columns={columns}
   rows={data}
   sx={{
    width: "100%",
   }}
  />
 );
};
