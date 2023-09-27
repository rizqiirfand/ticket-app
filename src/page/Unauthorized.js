import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "primary.dark",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        Unauthorized
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        You're not authorized using this page
      </Typography>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    </Box>
  );
}

export default Unauthorized;
