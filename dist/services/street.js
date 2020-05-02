"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const lineUtils_1 = require("../utils/lineUtils");
class StreetService {
    /**
     * Gets all the streets
     * @returns {Street[]}
     * @memberof StreetService
     */
    getAllStreets() {
        const street = fs.readFileSync('./data/streets.json', 'utf8');
        const result = [];
        const dd = JSON.parse(street);
        Object.assign(result, dd);
        return result;
    }
    /**
     * Creates a street .. Adds to json file
     * @param {Street} street
     * @memberof StreetService
     */
    createStreet(street) {
        const streets = this.getAllStreets();
        streets.push(street);
        fs.writeFileSync('./data/streets.json', JSON.stringify(streets));
    }
    /**
     * Find closest streets from a point
     * @param {Point} point point of reference
     * @returns {StreetDistance[]} closest streets
     * @memberof StreetService
     */
    findClosest(point) {
        const distances = [];
        const utl = new lineUtils_1.LineUtils();
        this.getAllStreets().forEach((street) => {
            const eq = utl.findLineEquation(street.start, street.end);
            const distance = Math.abs(utl.findDistanceFromPointToLine(point, eq));
            distances.push({ distance, name: street.name });
        });
        console.log(distances);
        const getDistances = distances.map((x) => x.distance);
        const closest = Math.min(...getDistances);
        return distances.filter(x => x.distance === closest);
    }
}
exports.StreetService = StreetService;
//# sourceMappingURL=street.js.map