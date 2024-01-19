import React from "react";
import { Grid, TextField, Typography } from "@mui/material/";

type StockRowProps = {
  symbol: string;
  name: string;
  closePrice: string | number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StockRow: React.FC<StockRowProps> = ({
  symbol,
  handleInputChange,
  name,
  closePrice,
}) => {
  const showError = symbol.length > 4;

  return (
    <Grid container>
      <Grid item sm={5} lg={5}>
        <TextField
          onChange={handleInputChange}
          name={name}
          type="text"
          variant="filled"
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          error={showError}
          label="Symbol"
          helperText={showError ? "*Too many letters" : null}
          value={symbol}
        />
      </Grid>
      <Grid item sm={2} lg={2}>
        <Typography sx={{ color: "green", fontSize: 28, fontWeight: 600 }}>
          {closePrice}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StockRow;
