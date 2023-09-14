const BASE_URL_METEREOLOGICAL =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=Madrid";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b025d565cemsh2f18dca926952f7p1a3995jsnf76aa65293a7",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const getData = async () => {
  try {
    const response = await fetch(BASE_URL_METEREOLOGICAL, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
