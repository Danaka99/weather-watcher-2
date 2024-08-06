import nodeMailer from "nodemailer";
import User from "../models/User.js";
import getWeather from "./weatherService.js";

async function sendWeatherReports() {
  const users = await User.find({});
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  for (const user of users) {
    const weather = await getWeather(user.location.lat, user.location.lon);
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Weather report",
      text: `Current weather at your location: ${weather.main.temp}°C, ${weather.weather[0].description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }
}

export default sendWeatherReports;
