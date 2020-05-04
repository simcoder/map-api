import { Point } from "../interfaces/point";

export const isPointEqual = (point1:Point, point2:Point):boolean=>{
    return (point1.x === point2.x && point1.y === point2.y)
}