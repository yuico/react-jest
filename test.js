test("1 is 1", () => {
  expect(1).toBe(1);
});

function getUser(id) {
  return{
    id,
    email: `user${id}@test.com`
  }
}

/* test("return a user object", () => {
  expect(getUser(1)).toBe({
    id:1,
    email: `user1@test.com`
  })
}); */

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id:1,
    email: `user1@test.com`
  })
});

test("number 0 is falsy but string '0' is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
})

test("array", () => {
  const colors = ["Red", "Green", "Pink"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Green");
  expect(colors).not.toContain("Blue");
})

//regex with toMatch()
test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com")
  expect(getUser(2).email).toMatch(/.*test.com$/)
})