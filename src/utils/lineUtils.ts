import { Point } from '../interfaces/point'
import { LineEq } from '../interfaces/line-eq';
export class LineUtils {

    findLineEquation(start:Point, end:Point): LineEq {
       if((start.x === start.y) && (end.y === end.x)){
           throw "Not a Line";
       }
       const deltaY:number = end.y - start.y;
       const deltaX:number = end.x - start.x;
       // Slope = - A / B
       const A = (deltaY)*-1
       const B = deltaX;
       // Ax + By = -C
       // C=(Ax+By)*-1
       const C = -1*(A*start.x + B*start.y);
       return { A, B, C };
    }

    findDistanceFromPointToLine(point:Point, line:LineEq): number {
        const top = (line.A*point.x) + (line.B*point.y) + line.C;
        const bottom = Math.sqrt((line.A*line.A) + (line.B*line.B));
        return top / bottom;
    }
}