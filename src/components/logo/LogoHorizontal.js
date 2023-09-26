import { Avatar, Box, Typography } from "@mui/material";
import { ConfirmationNumberRounded } from "@mui/icons-material";
import React from "react";

function LogoHorizontal() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ mr: 1, bgcolor: "primary.dark", width: 30, height: 30 }}>
        <ConfirmationNumberRounded sx={{ fontSize: "12pt" }} />
      </Avatar>
      <Typography component="h1" variant="h5">
        <b>Ticket App</b>
      </Typography>
    </Box>
  );
}

export default LogoHorizontal;
