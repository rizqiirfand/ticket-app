import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function SkeletonOverview() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={400} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SkeletonOverview;
