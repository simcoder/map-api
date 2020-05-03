import { StreetMock } from "../mocks/streetMock";

let service: StreetMock;
beforeEach(() => {
  service = new StreetMock();
});

describe("Street Service", () => {
  it("it should get all the streets", () => {
    expect(service.getAllStreets()).toStrictEqual(service.streets);
  });
  it("it should call createStreet and create", () => {
    const street = { name: "test", start: { x: 0, y: 4 }, end: { x: 4, y: 8 } };
    service.createStreet(street);

    const streets = service.getAllStreets();
    expect(streets.length).toBe(5);
    expect(streets.filter((x) => x.name === street.name)[0].name).toBe("test");
  });
  it("it should call createStreet and throw", () => {
    const street = { name: "", start: { x: 0, y: 4 }, end: { x: 4, y: 8 } };
    try {
      service.createStreet(street);
    } catch (error) {
      expect(error).toStrictEqual(new Error("bad data"));
    }
  });
  it("it should call findClosest and return array of streets", () => {
    const point = { x: 0, y: 0 };
    const expected = [
      { distance: 0, name: "main" },
      { distance: 0, name: "beg" },
    ];
    const result = service.findClosest(point);
    expect(result).toStrictEqual(expected);
  });
});
