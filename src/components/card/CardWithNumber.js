import { HourglassDisabled } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function CardWithNumber({ total, icon, title, color }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="div" sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
          <Avatar sx={{ bgcolor: color, width: 50, height: 50 }}>{icon}</Avatar>
        </CardMedia>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h4" component="div">
            <b>{total}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardWithNumber;
