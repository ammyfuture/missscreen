import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchSearchFromApi } from "../utils/fetchSearchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  console.log(videos);

  useEffect(() => {
    fetchSearchFromApi(searchTerm, setVideos);
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      {/* need to fetch the videos */}
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
