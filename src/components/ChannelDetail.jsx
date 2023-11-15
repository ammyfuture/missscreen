import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import axios from "axios";
import { Box } from "@mui/material";

const ChannelDetail = () => {
  const [channelDet, setChannelDet] = useState(null);

  const { id } = useParams();
  // console.log(channelDet);

  useEffect(() => {
    const fetchChannel = async () => {
      const options = {
        method: "GET",
        url: `https://youtube-v3-alternative.p.rapidapi.com/channel`,
        params: {
          id: id,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setChannelDet(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChannel();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />

        <ChannelCard channelDet={channelDet} marginTop="-110px" />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "150px" } }} />
        <Videos channelDet={channelDet} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
