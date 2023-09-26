import React from "react";
import Layout from "../components/layout/Layout";
import { Toolbar, Typography } from "@mui/material";

function Tickets() {
  return (
    <div>
      <Layout>
        <Toolbar />
        <Typography paragraph>Tickets</Typography>
      </Layout>
    </div>
  );
}

export default Tickets;
