import axios from "axios";
const moxios = require("moxios");

describe("some-thing", () => {
  let axiosInstance: any;
  beforeEach(() => {
    axiosInstance = axios.create();
    moxios.install(axiosInstance);
  });
  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it("should get 200 when calling get endpoint", (done) => {
    const streets = [
      {
        name: "main",
        start: {
          x: 0,
          y: 0,
        },
      },
    ];
    moxios.stubRequest("http://localhost:3000/api/street", {
      status: 200,
      response: streets,
    });
    axiosInstance
      .get("http://localhost:3000/api/street")
      .then((res: any) => {
        expect(res.status).toBe(200);
        expect(res.data).toStrictEqual(streets);
      })
      .finally(done);
  });
  //TODO add more
});
