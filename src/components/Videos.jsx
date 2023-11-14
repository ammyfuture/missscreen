import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  // console.log(videos);
  // console.log(videos[0].type.video);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* the video card */}
          {item.type === "video" && <VideoCard video={item} />}
          {/* the channel card */}
          {item.type === "channel" && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
