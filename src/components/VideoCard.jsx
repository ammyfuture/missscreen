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

const VideoCard = ({ video, videoDet }) => {
  console.log(video);
  console.log(videoDet);

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
  let content;

  if (video) {
    content = (
      <Card
        sx={{
          width: { md: "340px", xs: "100%" },
          boxShadow: "none",
          borderRadius: "none",
        }}
      >
        {/* this is for each video, and the link should work and take us to each videos page, path is video/videoid */}
        <Link to={video?.videoId ? `video/${video?.videoId}` : demoVideoUrl}>
          <CardMedia
            image={video?.thumbnail?.[0].url}
            alt={video?.title}
            sx={{ width: 360, height: 202 }}
          />
        </Link>

        {/* this was linking to the video too, its for the title of the video */}
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={video?.videoId ? `video/${video?.videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          {/* this one checks for the channel id, this is for the feed page, its setting the check mark and the channel title */}
          {/* question is where is the sub part */}
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
  }

  if (videoDet) {
    content = (
      <Card
        sx={{
          width: { md: "340px", xs: "100%" },
          boxShadow: "none",
          borderRadius: "none",
        }}
      >
        <Link
          to={videoDet?.videoId ? `video/${videoDet?.videoId}` : demoVideoUrl}
        >
          <CardMedia
            image={videoDet?.thumbnail?.[2].url}
            alt={videoDet?.title}
            // sx={{ width: 360, height: 202 }}
            sx={{ width: 360, height: 202 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link
            to={videoDet?.videoId ? `video/${videoDet?.videoId}` : demoVideoUrl}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {videoDet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          {/* lets see if this works */}
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
  }

  return content;
};
export default VideoCard;
