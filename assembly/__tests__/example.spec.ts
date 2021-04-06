import {hello_world} from '../';


//Test
describe("example", () => {
  it("should return Hello World", () => {
    expect<string>(hello_world()).toBe("Hello World");
  });
});
