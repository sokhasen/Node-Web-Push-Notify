const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = "BJNusOdj_XVN3P31Yv7DKcsoXBva5brqytdV1AJWVBsdmMT0IsVfjNadO2VIRYxzHLeMzWxHodwXkhRopDOfKLE";
const privateVapidKey = "oAKHso3XFORcib77oRWIa3FMU9INB26sB0sqklxWrMc";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Notification" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});
// console.log(webpush.generateVAPIDKeys())
const port = 2018;

app.listen(port, () => console.log(`Server started on port ${port}`));