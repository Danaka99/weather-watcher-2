import cron from "node-cron";

const { sendWeatherReport } = require("../services/weatherReportService");

cron.schedule("0 0 */3 * * *", () => {
  sendWeatherReports();
});
