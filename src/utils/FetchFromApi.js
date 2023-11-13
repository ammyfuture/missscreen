import axios from "axios";

// link for the server we will will fetch from
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResult: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);

  console.log(response);
  console.log(response.data);
  return response.data;
};
