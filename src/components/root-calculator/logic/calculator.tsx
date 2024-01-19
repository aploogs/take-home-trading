import {
  SelectChangeEvent,
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../../styles/calculator.module.scss";

export const Calculator: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [precisionValue, setPrecisionValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setResult("");
  };

  const handlePrecisionChange = (event: SelectChangeEvent) => {
    const precision = event.target;
    setPrecisionValue(precision.value);
    setResult("");
  };

  const calculateSquareRoot = (inputValue: number, precisionValue: any) => {
    let x,
      x1 = inputValue / 2;
    if (!isNaN(inputValue)) {
      do {
        x = x1;
        x1 = (x + inputValue / x) / 2;
      } while (x !== x1);
      const customParse = (precisionValue: number, x: number) => {
        let tempValue = x.toString();
        tempValue = tempValue.slice(
          0,
          tempValue.indexOf(".") + precisionValue + 1
        );
        return tempValue;
      };
      x = customParse(precisionValue, x);
      setResult(x);
    } else {
      setResult("Please input a number");
    }
    return x;
  };

  return (
    <Box mt={20} justifyContent="center">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Enter a number"
            variant="filled"
            className={styles.calculatorInput}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl sx={{ maxWidth: 170 }} fullWidth>
            <InputLabel>Precision?</InputLabel>
            <Select
              placeholder="Precision?"
              className={styles.calculatorInput}
              onChange={handlePrecisionChange}
              value={precisionValue}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "white" }}>
              *Displays full number unless specified
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2} mr={20}>
          <Typography
            sx={{
              marginLeft: "12px",
              marginTop: "12px",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            {result}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#16A8BE" }}
            onClick={() =>
              calculateSquareRoot(Number(inputValue), precisionValue)
            }
          >
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
