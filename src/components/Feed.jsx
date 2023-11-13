import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

const Feed = () => {
  return (
    // this stack got a flexDir for normal devices and md and lower
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* this box, got a height prop, a borderRight and a padding horizontal- two got custom for normal and md screens */}
      {/* the side bar box */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        {/* this txt gets a class name and a variant not sure what that is and extra styling for margin and txt color */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Miss Screen
        </Typography>
      </Box>

      {/* the feed box */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        {/* need to fetch the videos */}
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};
export default Feed;
