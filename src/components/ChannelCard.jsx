import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ ChannelCard, channelDet, marginTop }) => {
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
        marginTop,
      }}
    >
      <Link
        // extracting the channel id following the obj path to it

        to={`/channel/${ChannelCard?.channelId}`}
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
            image={
              ChannelCard
                ? ChannelCard?.thumbnail?.[1].url || demoProfilePicture
                : channelDet?.meta?.thumbnail?.[2].url || demoProfilePicture
            }
            alt={
              ChannelCard ? ChannelCard?.channelTitle : channelDet?.meta?.title
            }
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
            {ChannelCard ? ChannelCard?.channelTitle : channelDet?.meta?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>

          {ChannelCard
            ? ChannelCard?.subscriberCount && (
                <Typography>{ChannelCard?.subscriberCount}</Typography>
              )
            : channelDet?.meta?.subscriberCount && (
                <Typography>
                  {channelDet?.meta?.subscriberCount} subscribers
                </Typography>
              )}
        </CardContent>
      </Link>
    </Box>
  );
};
export default ChannelCard;
