import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Calculator } from "./logic/calculator";

const RootCalculator: React.FC = () => {
  return (
    <>
      <Box mt={15} justifyContent="center">
        <Grid container spacing={2}>
          <Grid sx={{ color: "white" }} item mb={5} lg={12}>
            <Typography variant="h4">Square roots to precision</Typography>
          </Grid>
          <Grid item justifyContent="center" xs={12}>
            <Calculator />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RootCalculator;
