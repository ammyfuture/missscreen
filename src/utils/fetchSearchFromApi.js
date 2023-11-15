import axios from "axios";

export const fetchSearchFromApi = async (category, setter) => {
  const options = {
    method: "GET",
    url: `https://youtube-v3-alternative.p.rapidapi.com/search?query=${category}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    setter(response.data.data);
  } catch (error) {
    console.error(error);
  }
};
