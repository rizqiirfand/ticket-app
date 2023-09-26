import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTicketsByIdApi } from "../api/ticketAPI";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Layout from "../components/layout/Layout";
import { useTicket } from "../hooks/useTicket";

function TicketsDetail() {
  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(true);
  const { updateStatus } = useTicket();
  const { id } = useParams();
  const navigate = useNavigate();
  const getTicketsById = () =>
    getTicketsByIdApi(id)
      .then((res) => setTicket(res.data))
      .finally(() => setLoading(false));
  useEffect(() => {
    getTicketsById();
  }, []);
  const Status = ({ id, status }) => {
    const onAccept = (state) => {
      setLoading(true);
      updateStatus(id, state).finally(() => navigate(-1));
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
    <div>
      <Layout>
        <Toolbar />
        <Button onClick={() => navigate(-1)}>Back</Button>
        {loading ? (
          <CircularProgress />
        ) : (
          <Card>
            <CardHeader title="Detail Ticket" />
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Typography>
                    <b>Customer Name</b>
                  </Typography>
                  <Typography>
                    <b>Date</b>
                  </Typography>
                  <Typography>
                    <b>Priority</b>
                  </Typography>
                  <Typography>
                    <b>Detail</b>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography>{ticket.customer}</Typography>
                  <Typography>{ticket.date.toLocaleDateString("en-US")}</Typography>
                  <Typography>{ticket.priority}</Typography>
                  <Typography>{ticket.detail}</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Status id={ticket.id} status={ticket.status} />
            </CardActions>
          </Card>
        )}
      </Layout>
    </div>
  );
}

export default TicketsDetail;
