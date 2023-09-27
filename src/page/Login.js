import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Logo from "../components/logo/Logo";
import FormLogin from "../components/form/FormLogin";
import { Trans, useTranslation } from "react-i18next";
import SwicthLang from "../components/switch/SwicthLang";

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
        <SwicthLang />
        <CardContent>
          <Logo />
          <Box sx={{ my: "1rem", textAlign: "center" }}>
            <Typography variant="h6">
              <b>
                <Trans i18nKey={"login"} />
              </b>
            </Typography>
            <Typography variant="caption" sx={{ color: "grey.500" }}>
              <Trans i18nKey={"login.subtitle"} />
            </Typography>
          </Box>
          <FormLogin />
        </CardContent>
      </Card>
    </Box>
  );
}
