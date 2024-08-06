import express from "express";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";
import router from "./routes/router.js";
import connectDB from "./services/databaseService.js";

const port = process.env.PORT || 8000;

const app = express();

// Body parser middlerware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

const startServer = async () => {
  // Connect to database
  await connectDB();

  // Router
  app.use("/", router);

  // Error Handling
  app.use(notFound);
  app.use(errorHandler);

  app.listen(port, () =>
    console.log(`Application is running on port ${port}`.green)
  );
};

startServer();