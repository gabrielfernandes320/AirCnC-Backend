const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload.js");

const sessionController = require("./controllers/SessionController");
const spotController = require("./controllers/SpotController");
const dashboardController = require("./controllers/DashboardController");
const bookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", sessionController.store);

routes.post("/spots", upload.single("thumbnail"), spotController.store);
routes.get("/spots", spotController.index);
routes.post("/spots/:spot_id/bookings", bookingController.store);

routes.get("/dashboard", dashboardController.show);

module.exports = routes;
