import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Logo from "../components/font/Logo";
import FormLogin from "../components/form/FormLogin";

export default function Login() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "primary.dark",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "20rem", p: "1rem" }}>
        <CardContent>
          <Logo />
          <Box sx={{ my: "1rem", textAlign: "center" }}>
            <Typography variant="h6">
              <b>Login into ticket app</b>
            </Typography>
            <Typography variant="caption" sx={{ color: "grey.500" }}>
              Enter your email and password below
            </Typography>
          </Box>
          <FormLogin />
        </CardContent>
      </Card>
    </Box>
  );
}
