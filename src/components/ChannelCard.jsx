import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail?.channelTitle);

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "364px", md: "338px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link
        // extracting the channel id following the obj path to it
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail?.thumbnail?.[1].url || demoProfilePicture}
            alt={channelDetail?.channelTitle}
            sx={{
              borderRadius: "50%",
              // height: 176,
              // width: 176,
              height: 180,
              width: 180,
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.channelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.subscriberCount && (
            <Typography>{channelDetail?.subscriberCount}</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
export default ChannelCard;
