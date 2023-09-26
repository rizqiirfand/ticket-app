import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { CircularProgress, Toolbar, Typography } from "@mui/material";
import { getTicketsApi } from "../api/ticketAPI";
import TableTickets from "../components/table/TableTickets";

function Tickets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTickets = () =>
    getTicketsApi().then((res) => {
      if (res.status === 200) setData(res.data);
      setLoading(false);
    });

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
      <Layout>
        <Toolbar />
        <Typography paragraph>Tickets</Typography>
        {loading ? <CircularProgress /> : <TableTickets rows={data} />}
      </Layout>
    </div>
  );
}

export default Tickets;
