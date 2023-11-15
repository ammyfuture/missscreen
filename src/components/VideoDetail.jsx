import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchRelatedVideos } from "../utils/fetchRelatedVideos";
import { fetchVideoDetails } from "../utils/fetchVideoDetails";
import { RelatedVideos } from "./";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState({});
  useEffect(() => {
    // fetchSearchFromApi(id, setVideos);
    fetchVideoDetails(id, setVideo);
    fetchRelatedVideos(id, setRelatedVideos);
  }, [id]);

  console.log(video);
  console.log(relatedVideos);

  // console.log(videos.title);
  if (!video) return "Loading...";
  if (!relatedVideos) return "Loading...";
  const {
    title,
    channelId,
    channelTitle,
    description,
    publishDate,
    viewCount,
  } = video;
  const { data } = relatedVideos;
  console.log(data);

  console.log(publishDate);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {/* {publishDate} */}
                  {/* {parseInt(viewCount).toLocaleString()} views */}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={data} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};
export default VideoDetail;
