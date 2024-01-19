"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import NavBar from "../nav-bar";

import styles from "../../styles/home.module.scss";
import RootCalculator from "../root-calculator";
import Ticker from "../ticker";

const Home: React.FC = () => {
  // max width 1880 due to image constraints
  return (
    <Box>
      <Grid pt={1} container spacing={4}>
        <Grid item lg={12}>
          <NavBar />
        </Grid>
        <Grid item className={styles.calculator} lg={12}>
          <RootCalculator />
        </Grid>
        <Grid item className={styles.ticker} lg={12}>
          <Ticker />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
