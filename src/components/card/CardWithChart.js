import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";

function CardWithChart({ data }) {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <Line
          style={{ backgroundColor: "white" }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Ticket Graph in 1 year",
              },
            },
          }}
          data={{
            labels: data.map((dt) => dt.month),
            datasets: [
              {
                id: 1,
                label: "Ticket",
                data: data.map((dt) => dt.total),
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
}

export default CardWithChart;
