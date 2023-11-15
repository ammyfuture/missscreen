import axios from "axios";

export const fetchRelatedVideos = async (id, setter) => {
  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/related",
    params: {
      id: id,
      //   geo: "US",
      //   lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "2ab622f6a4mshd31cedde6a37e32p1c8e54jsn648a81f79ef2",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    setter(response.data);
  } catch (error) {
    console.error(error);
  }
};
