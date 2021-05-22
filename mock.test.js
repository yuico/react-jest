const mockFn = jest.fn();

mockFn();
mockFn(1);
mockFn("a");
mockFn([1, 2], { a: "b" });

mockFn.mockReturnValue("I am a mock!");
console.log(mockFn()); // I am a mock!

mockFn.mockResolvedValue("I will be a mock!");
mockFn().then((result) => {
  console.log(result); // I will be a mock!
});

mockFn.mockImplementation((name) => `I am ${name}!`);
console.log(mockFn("Dale")); // I am Dale!

mockFn("a");
mockFn(["b", "c"]);

test("test fn", () => {
  expect(mockFn).toBeCalledTimes(9);
  expect(mockFn).toBeCalledWith("a");
  expect(mockFn).toBeCalledWith(["b", "c"]);
})