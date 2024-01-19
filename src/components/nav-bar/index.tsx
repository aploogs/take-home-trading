import SsidChartIcon from "@mui/icons-material/SsidChart";
import { AppBar, Toolbar, Grid, Icon, Typography } from "@mui/material";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "#001236" }}>
        <Grid item lg={1}>
          <Icon component={SsidChartIcon} />
        </Grid>
        <Grid item lg={2}>
          <Typography>Trading Block Take-home</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
