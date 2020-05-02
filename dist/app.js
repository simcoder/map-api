"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const street_1 = require("./services/street");
const app = express_1.default();
const port = 5003; // default port to listen
app.use(body_parser_1.default.json());
// define a route handler for the default home page
app.get("/api/street/closest", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.x || !req.query.y) {
        return res.sendStatus(400);
    }
    const pointReference = {
        x: Number(req.query.x),
        y: Number(req.query.x),
    };
    const streetService = new street_1.StreetService();
    res.send(streetService.findClosest(pointReference));
}));
app.get("/api/street", (req, res) => {
    const streetService = new street_1.StreetService();
    res.send(streetService.getAllStreets());
});
app.post("/api/street", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const street = req.body;
    if (!street.name || !street.start || !street.end) {
        return res.sendStatus(400);
    }
    const streetService = new street_1.StreetService();
    streetService.createStreet(street);
    res.sendStatus(200);
}));
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map