import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CardTasks({ data }) {
  return (
    <Card>
      <CardHeader
        title="Tickets"
        subheader="latest tickets"
        action={
          <Link to="/overview">
            <Typography variant="caption" color={"primary"} gutterBottom sx={{ mx: 2, mt: -4 }}>
              view details
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

export default CardTasks;
