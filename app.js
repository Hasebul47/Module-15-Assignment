const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const apiRouter = require("./src/routes/api");

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// HTTP Request Logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Request body parser (JSON & URL-encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base API Routing
app.use("/", apiRouter);

// 404 - Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error"
  });
});

module.exports = app;
