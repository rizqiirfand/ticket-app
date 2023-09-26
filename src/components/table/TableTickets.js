import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import { updateTicketApi } from "../../api/ticketAPI";

function TableTickets({ rows }) {
  const [data, setData] = React.useState(rows);
  const [loading, setLoading] = React.useState(false);

  // PAGINATION
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemPerPage = 5;
  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;

  // handle pagination slice data
  const handlePaginationData = (data) => {
    return data.slice(indexOfFirstPost, indexOfLastPost);
  };

  // set pagination page
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // FILTER AND SORT
  const [filter, setFilter] = React.useState("");
  const [sort, setSort] = React.useState("");

  const FilterByPriority = (e) => {
    setCurrentPage(1);
    let temp =
      e.target.value === "all" ? rows : rows.filter((dt) => dt.priority === e.target.value);
    if (sort !== "") temp.sort((a, b) => (sort === "asc" ? a.date > b.date : b.date > a.date));
    setFilter(e.target.value);
    setData(temp);
  };

  const SortByDate = (e) => {
    setCurrentPage(1);
    let temp = data;
    if (filter !== "" && filter !== "all") temp = rows.filter((dt) => dt.priority === filter);
    temp.sort((a, b) => (e.target.value === "asc" ? a.date > b.date : b.date > a.date));
    setSort(e.target.value);
    setData(temp);
  };

  // UPDATE STATUS TICKET
  const Status = ({ id, status }) => {
    const onAccept = (state) => {
      setLoading(true);
      let temp = data;
      temp[temp.findIndex((dt) => dt.id === id)].status = state;
      updateTicketApi(temp)
        .then((res) => setData(res.data))
        .finally(() => setLoading(false));
    };
    return status === null ? (
      <>
        <Button color="primary" onClick={() => onAccept(true)}>
          Accept
        </Button>
        <Button color="warning" onClick={() => onAccept(false)}>
          Reject
        </Button>
      </>
    ) : status === true ? (
      <Typography color="success">Accepted</Typography>
    ) : (
      <Typography color="warning">Reject</Typography>
    );
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel>Filter By Priority</InputLabel>
                <Select label="Filter By Priority" onChange={FilterByPriority}>
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"high"}>High</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"low"}>Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel>Sort By Date</InputLabel>
                <Select label="Sort By Date" onChange={SortByDate}>
                  <MenuItem value={"asc"}>Ascending</MenuItem>
                  <MenuItem value={"desc"}>Descending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Detail</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {handlePaginationData(data).map((row, i) => (
                <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{indexOfFirstPost + i + 1}</TableCell>
                  <TableCell>{row.detail}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.priority}</TableCell>
                  <TableCell>{row.date.toLocaleDateString("en-US")}</TableCell>
                  <TableCell>
                    <Status id={row.id} status={row.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <Pagination
              page={currentPage}
              count={Math.ceil(data.length / itemPerPage)}
              onChange={(e, page) => handlePaginate(page)}
            />
          </Box>
        </TableContainer>
      )}
    </>
  );
}

export default TableTickets;
