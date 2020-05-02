"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LineUtils {
    findLineEquation(start, end) {
        const deltaY = end.y - start.y;
        const deltaX = end.x - start.x;
        // Slope = - A / B
        const A = (deltaY) * -1;
        const B = deltaX;
        // Ax + By = -C
        // C=(Ax+By)*-1
        const C = -1 * (A * start.x + B * start.y);
        return { A, B, C };
    }
    findDistanceFromPointToLine(point, line) {
        const top = (line.A * point.x) + (line.B * point.y) + line.C;
        const bottom = Math.sqrt((line.A * line.A) + (line.B * line.B));
        return top / bottom;
    }
}
exports.LineUtils = LineUtils;
//# sourceMappingURL=lineUtils.js.map