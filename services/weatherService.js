import axios from "axios";

async function fetchWeatherData(lat, lon) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
}

export default fetchWeatherData;