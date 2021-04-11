import {helloWorld} from '../';


//Test
describe("example", () => {
  it("should return Hello World", () => {
    expect<string>(helloWorld()).toBe("Hello World");
  });
});
