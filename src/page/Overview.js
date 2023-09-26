import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { getOverviewApi } from "../api/overviewAPI";
import {
  HourglassBottom,
  HourglassDisabled,
  ImportContacts,
  PanoramaFishEye,
} from "@mui/icons-material";
import CardWithNumber from "../components/card/CardWithNumber";
import SkeletonOverview from "../components/skeleton/SkeletonOverview";
import CardWithChart from "../components/card/CardWithChart";
import CardUnresolved from "../components/card/CardUnresolved";
import CardTasks from "../components/card/CardTasks";

function Overview() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const getOverview = () =>
    getOverviewApi()
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          setData(data);
        }
      })
      .finally(() => setLoading(false));
  useEffect(() => {
    getOverview();
  }, []);
  return (
    <div>
      <Layout>
        <Toolbar />
        {loading ? (
          <SkeletonOverview />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {/* Unresolved */}
              <CardWithNumber
                icon={<HourglassDisabled sx={{ fontSize: "24pt" }} />}
                total={data.total_unresolved}
                title={"Unresolved"}
                color={"primary.dark"}
              />
            </Grid>
            <Grid item xs={3}>
              {/* Overview */}
              <CardWithNumber
                icon={<PanoramaFishEye sx={{ fontSize: "24pt" }} />}
                total={data.total_overview}
                title={"Overview"}
                color={"success.dark"}
              />
            </Grid>
            <Grid item xs={3}>
              {/* Open */}
              <CardWithNumber
                icon={<ImportContacts sx={{ fontSize: "24pt" }} />}
                total={data.total_open}
                title={"Open"}
                color={"info.dark"}
              />
            </Grid>
            <Grid item xs={3}>
              {/* Onhold */}
              <CardWithNumber
                icon={<HourglassBottom sx={{ fontSize: "24pt" }} />}
                total={data.total_onHold}
                title={"On Hold"}
                color={"warning.dark"}
              />
            </Grid>
            <Grid item xs={12}>
              <CardWithChart data={data.ticket} />
            </Grid>
            <Grid item xs={6}>
              <CardUnresolved data={data.unresolved} />
            </Grid>
            <Grid item xs={6}>
              <CardTasks data={data.latest_task} />
            </Grid>
          </Grid>
        )}
      </Layout>
    </div>
  );
}

export default Overview;
