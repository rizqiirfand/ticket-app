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
import { Trans, useTranslation } from "react-i18next";
import { t } from "i18next";

function CardWithChart({ data }) {
  const { t } = useTranslation();
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
                text: t("chart_title"),
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
