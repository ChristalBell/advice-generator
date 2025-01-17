import Advice from "@/components/Advice";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",

        backgroundColor: COLORS.yellow,
      }}
    >
      <Typography variant="h1">
        <Advice />
      </Typography>
    </Box>
  );
};

export default Home;
