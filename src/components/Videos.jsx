import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, channelDet }) => {
  // console.log(videos);
  // console.log(videos[0].type.video);
  // const { data } = channelDet;
  console.log(channelDet);
  console.log(videos);

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos
        ? videos &&
          videos.map((item, idx) => (
            <Box key={idx}>
              {item.type === "video" && <VideoCard video={item} />}
              {item.type === "channel" && <ChannelCard ChannelCard={item} />}
            </Box>
          ))
        : channelDet &&
          channelDet.data.map((item, idx) => (
            <Box key={idx}>{item.videoId && <VideoCard videoDet={item} />}</Box>
          ))}
    </Stack>
  );
};
export default Videos;
