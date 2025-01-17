"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { COLORS } from "@/styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const Advice = () => {
  const [adviceData, setAdviceData] = useState({ slip: { id: 0, advice: "" } });
  const mobile = useMediaQuery("(min-width:600px)");
  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdviceData(data));
  };
  console.log(adviceData);

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem",
        borderRadius: "1rem",
        maxWidth: mobile ? "60vw" : "33.75rem",
        overflow: "hidden",
      }}
      onClick={getAdvice}
    >
      <Typography sx={{ color: COLORS.black, marginBottom: "1.5rem" }}>
        {" "}
        Advice # {adviceData.slip.id}
      </Typography>
      <Typography
        sx={{
          color: COLORS.black,
          fontSize: "1.75rem",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        &quot;{adviceData.slip.advice}&quot;
      </Typography>
      <Button
        sx={{
          backgroundColor: COLORS.yellow,
          color: COLORS.black,
          borderRadius: "50%",
          maxHeight: "4rem",
          border: "1.5px solid black",
          maxWidth: "4rem",
          position: "relative",
          top: 40,

          "&:hover": {
            backgroundColor: COLORS.pink,
            color: COLORS.white,
          },
        }}
      >
        Smile
      </Button>
    </Box>
  );
};

export default Advice;
