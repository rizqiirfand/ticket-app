import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { CircularProgress, Toolbar } from "@mui/material";
import TableTickets from "../components/table/TableTickets";
import FormAddTicket from "../components/form/FormAddTicket";
import { useTicket } from "../hooks/useTicket";
import { useAuth } from "../hooks/useAuth";

function Tickets() {
  const [loading, setLoading] = useState(true);
  const { tickets, addTickets, updateStatus, getTickets } = useTicket();
  const { role } = useAuth();
  const addTicket = (sendData) => {
    setLoading(true);
    addTickets(sendData).then(() => setLoading(false));
  };
  useEffect(() => {
    getTickets().then(() => setLoading(false));
  }, []);

  return (
    <div>
      <Layout>
        <Toolbar />
        <FormAddTicket onSave={addTicket} />
        {role === "admin" ? (
          loading ? (
            <CircularProgress />
          ) : (
            <TableTickets rows={tickets} updateStatus={updateStatus} />
          )
        ) : (
          <></>
        )}
      </Layout>
    </div>
  );
}

export default Tickets;
