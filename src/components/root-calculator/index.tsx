import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Calculator } from "./logic/calculator";

const RootCalculator: React.FC = () => {
  return (
    <>
      <Box mt={15} ml={1}>
        <Grid container spacing={2}>
          <Grid sx={{ color: "white" }} item mb={4} sm={12} lg={12}>
            <Typography variant="h4">Square roots to precision</Typography>
          </Grid>
          <Grid item ml={4} xs={12}>
            <Calculator />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RootCalculator;
