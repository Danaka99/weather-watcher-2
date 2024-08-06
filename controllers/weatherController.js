import User from "../models/User.js";
import fetchWeatherData from "../services/weatherService.js";

// @desc Get weather data
// @route GET /weather/:email/:date
export const getWeather = async (req, res, next) => {
  const { email, date } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    const weatherData = [];
    for (const wd of user.location) {
      try {
        const data = await fetchWeatherData(wd.lat, wd.lon);
        weatherData.push({
          date: wd.date,
          weather: data.weather, // Adjust this based on the actual structure of fetchWeatherData response
        });
      } catch (error) {
        console.error(
          `Error fetching weather data for lat: ${wd.lat}, lon: ${wd.lon}\n`,
          error
        );
        error.status = 500;
        return next(error);
      }
    }
    res.json(weatherData);
  } catch (err) {
    console.error(err.message);
    const error = new Error(err.message);
    error.status = 400;
    return next(error);
  }
};
