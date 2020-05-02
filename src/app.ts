import express from "express";
import bodyParser from "body-parser";
import { StreetService } from "./services/street";
import { LineUtils } from "./utils/lineUtils";
import { Street } from "./interfaces/street";
import { StreetDistance } from "./interfaces/street-distance";
import { Point } from "./interfaces/point";

const app = express();
const port = process.env.PORT || 3000; // default port to listen in the event no env variable is set
app.use(bodyParser.json());
// define a route handler for the default home page
app.get("/api/street/closest", async (req, res) => {
  if (!req.query.x || !req.query.y) {
    return res.sendStatus(400);
  }
  const pointReference: Point = {
    x: Number(req.query.x),
    y: Number(req.query.x),
  };
  const streetService = new StreetService();
  res.send(streetService.findClosest(pointReference));
});

app.get("/api/street", (req, res) => {
  const streetService = new StreetService();
  res.send(streetService.getAllStreets());
});

app.post("/api/street", async (req, res) => {
  const street: Street = req.body;
  // cover bad data.. undefined and not a line
  if ((!street.name || !street.start || !street.end) || 
      ((street.start.x === street.start.y) || (street.end.y === street.end.x))
    ) {
    return res.sendStatus(400);
  }

  const streetService = new StreetService();
  streetService.createStreet(street);
  res.sendStatus(200);
});

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
