import axios from "axios";

export const BASE_URL = "'https://youtube-v3-alternative.p.rapidapi.com/search";

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (q) => {
  const { data } = await axios.get(`${q}`, options);

  return data;
};
