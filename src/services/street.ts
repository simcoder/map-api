import { Street } from "../interfaces/street";
import * as fs from "fs";
import { LineUtils } from "../utils/lineUtils";
import { Point } from "../interfaces/point";
import { StreetDistance } from "../interfaces/street-distance";

export class StreetService {

  /**
   * Gets all the streets
   * @returns {Street[]}
   * @memberof StreetService
   */
  getAllStreets(path:string='./data/streets.json'): Street[] {
    const street = fs.readFileSync(path, 'utf8');
    const result: Street[] = [];
    const dd = JSON.parse(street);
    Object.assign(result, dd);
    return result;
  }


  /**
   * Creates a street .. Adds to json file
   * @param {Street} street
   * @memberof StreetService
   */
  createStreet=(street:Street, path:string='./data/streets.json') => {
    if(!street.name){
      throw new Error();
    }
    const streets = this.getAllStreets();
    streets.push(street);
    fs.writeFileSync(path, JSON.stringify(streets));
  }


  /**
   * Find closest streets from a point
   * @param {Point} point point of reference
   * @returns {StreetDistance[]} closest streets
   * @memberof StreetService
   */
  findClosest(point: Point): StreetDistance[] {
    const distances: StreetDistance[] = [];
    const utl = new LineUtils();

    this.getAllStreets().forEach((street) => {
      const eq = utl.findLineEquation(street.start, street.end);
      const distance = Math.abs(utl.findDistanceFromPointToLine(point, eq));
      distances.push({ distance, name: street.name });
    });
    const getDistances = distances.map((x: StreetDistance) => x.distance);
    const closest = Math.min(...getDistances);
    return distances.filter(x => x.distance === closest);
  }
}
