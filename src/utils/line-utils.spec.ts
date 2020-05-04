import { LineUtils } from "./line-utils";

let utils: LineUtils;
beforeEach(() => {
  utils = new LineUtils();
});

describe("LineUtils Tests", () => {
  it("it should call findLineEquation with valid line and return line eq", () => {
    const start = { x: 4, y: -2 };
    const end = { x: 6, y: 5 };
    const result = utils.findLineEquation(start, end);
    const expected = { A: -7, B: 2, C: 32 };
    expect(result).toStrictEqual(expected);
  });
  it("it should call findLineEquation with and invalid line and throw", () => {
    const start = { x: 0, y: 0 };
    const end = { x: 0, y: 0 };
    try {
        utils.findLineEquation(start, end);
    } catch (error) {
      expect(error).toStrictEqual(new Error("Not a Line"));
    }
  });
  it("it should call findDistanceFromPointToLine with line equation and point and return distance", () => {
    const point = { x: 0, y: 0 };
    const lineEq = { A: -7, B: 2, C: 32 };
    const expected = 4.395538046358049;
    expect(utils.findDistanceFromPointToLine(point, lineEq)).toStrictEqual(expected);
  });
});
