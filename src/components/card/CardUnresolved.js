import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

function CardUnresolved({ data }) {
  return (
    <Card>
      <CardHeader
        title={<Trans i18nKey={"Unresolved Tickets"} />}
        subheader={<Trans i18nKey={"latest unresolved"} />}
        action={
          <Link to="/overview">
            <Typography variant="caption" color={"primary"} gutterBottom sx={{ mx: 2, mt: -4 }}>
              <Trans i18nKey={"view details"} />
            </Typography>
          </Link>
        }
      />
      <List sx={{ height: 250, overflowY: "scroll" }}>
        {data.map((dt) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={dt.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default CardUnresolved;
