import axios from "axios";

// link for the server we will will fetch from
const BASE_URL1 = "https://youtube-v3-alternative.p.rapidapi.com";
const BASE_URL2 = "https://youtube-v31.p.rapidapi.com";

const options1 = {
  url: BASE_URL1,
  // params: { maxResult: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

const options2 = {
  url: BASE_URL2,
  // params: { maxResult: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi1 = async (url) => {
  const response = await axios.get(`${BASE_URL1}/${url}`, options1);

  // console.log(response);
  console.log(response.data);
  return response.data;
};

export const fetchFromApi2 = async (url) => {
  const response = await axios.get(`${BASE_URL1}/${url}`, options2);

  // console.log(response);
  // console.log(response.data);
  return response.data;
};
