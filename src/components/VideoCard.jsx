import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  // console.log(video);
  // console.log(video?.channelId);
  // console.log(video?.channelThumbnail);
  // console.log(video?.channelTitle);
  // console.log(video?.description);
  // console.log(video?.lengthText);
  // console.log(video?.publishedText);
  // console.log(video?.richThumbnail);
  // console.log(video?.title);
  // console.log(video?.type);
  // console.log(video?.videoId);
  // console.log(video?.videoCount);

  return (
    <Card
      sx={{
        width: { md: "340px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      {/* <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link> */}

      <Link to={video?.videoId ? `video/${video?.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video?.thumbnail?.[0].url}
          alt={video?.title}
          sx={{ width: 360, height: 202 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={video?.videoId ? `video/${video?.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            video?.channelId ? `/channel/${video?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
