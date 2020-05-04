import { isPointEqual } from "./pointEqualityUtil";

describe("Point Equality Tests", () => {
    it("it should call isPointEqual with 2 identitcal points and return true", () => {
      const point1 = { x: 1, y: 1 };
      const point2 = { x: 1, y: 1 };

      expect(isPointEqual(point1, point2)).toBeTruthy();
    });
    it("it should call isPointEqual with 2 different points and return false", () => {
        const point1 = { x: 1, y: 1 };
        const point2 = { x: 1, y: 3 };
        expect(isPointEqual(point1, point2)).toBeFalsy();
      });
  });
