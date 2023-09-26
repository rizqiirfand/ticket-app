import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { CircularProgress, Toolbar, Typography } from "@mui/material";
import { addTicketApi, getTicketsApi } from "../api/ticketAPI";
import TableTickets from "../components/table/TableTickets";
import FormAddTicket from "../components/form/FormAddTicket";
import { useTicket } from "../hooks/useTicket";

function Tickets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tickets, updateStatus, getTickets } = useTicket();
  const addTickets = (formData) => {
    setLoading(true);
    const sendData = {
      ...formData,
      status: null,
      id: data.length + 1,
      date: new Date(formData.date),
    };
    addTicketApi(sendData).then((res) => {
      if (res.status === 200) setData((prev) => [res.data, ...prev]);
      setLoading(false);
    });
  };
  useEffect(() => {
    getTickets().then(() => setLoading(false));
  }, []);

  return (
    <div>
      <Layout>
        <Toolbar />
        <FormAddTicket onSave={addTickets} />
        {loading ? (
          <CircularProgress />
        ) : (
          <TableTickets rows={tickets} updateStatus={updateStatus} />
        )}
      </Layout>
    </div>
  );
}

export default Tickets;
