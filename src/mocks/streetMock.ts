import { StreetService } from "../services/street";
import { Street } from "../interfaces/street";
import { StreetDistance } from "../interfaces/street-distance";
import { LineUtils } from "../utils/lineUtils";
import { Point } from "../interfaces/point";

export class StreetMock extends StreetService {
  streets = [
    {
      name: "main",
      start: {
        x: 0,
        y: 0,
      },
      end: {
        x: 10,
        y: 30.5,
      },
    },
    {
      name: "beg",
      start: {
        x: 0,
        y: 0,
      },
      end: {
        x: 1,
        y: 7,
      },
    },
    {
      name: "yoMoma",
      start: {
        x: -3,
        y: -8,
      },
      end: {
        x: 2,
        y: 3,
      },
    },
    {
      name: "test3",
      start: {
        x: -6,
        y: -8,
      },
      end: {
        x: 2,
        y: 3,
      },
    },
  ];
  getAllStreets() {
    return this.streets;
  }
  createStreet = (street: Street) => {
    if (!street.name) {
      throw new Error("bad data");
    }
    this.streets.push(street);
  };
  
  findClosest(point:Point):StreetDistance[]{
    const distances: StreetDistance[] = [];
    const utl = new LineUtils();

    this.streets.forEach((street) => {
      const eq = utl.findLineEquation(street.start, street.end);
      const distance = Math.abs(utl.findDistanceFromPointToLine(point, eq));
      distances.push({ distance, name: street.name });
    });
    const getDistances = distances.map((x: StreetDistance) => x.distance);
    const closest = Math.min(...getDistances);
    return distances.filter(x => x.distance === closest);
  }
}
