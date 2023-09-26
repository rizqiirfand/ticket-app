import { Avatar, Box, Typography } from "@mui/material";
import { ConfirmationNumberRounded } from "@mui/icons-material";
import React from "react";

function Logo() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
        <ConfirmationNumberRounded />
      </Avatar>
      <Typography component="h1" variant="h5">
        <b>Ticket App</b>
      </Typography>
    </Box>
  );
}

export default Logo;
