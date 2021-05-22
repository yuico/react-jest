const userService = require("./userService");
const data = require("./data");

/* test("find all users", () => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );

  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

test("create a user", () => {
  const user = { id: "4", email: "user4@test.com" };

  userService.create(user);

  expect(data.users).toHaveLength(1);
  expect(data.users).toContainEqual(user);
}); */

/* remove deplication beforeEach() */
/* //after the test reset the data
afterEach(() => {
  data.users.splice(0);
});

test("destory an user", () => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );

  const id = 3;
  const user = data.users.find((user) => user.id === id);

  userService.destroy(id);

  expect(data.users).toHaveLength(2);
  expect(data.users).not.toContainEqual(user);
}); */

/* remove deplication beforeEach() */
//after the test reset the data
/* afterEach(() => {
  data.users.splice(0);
});

beforeEach(() => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );
});

test("find all users", () => {
  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

test("destory a user", () => {
  const id = 3;
  const user = data.users.find((user) => user.id === id);

  userService.destroy(id);

  expect(data.users).toHaveLength(2);
  expect(data.users).not.toContainEqual(user);
}); */

/* beforeAll(), afterAll() call only one time */
let connection;

beforeAll(() => {
  conection = openConnection({ host: "...", port: "..." });
});

afterAll(() => {
  conection.close();
});

/* only() */
/* test.only("run only", () => {
  // test only this in the file
});

test("not run", () => {
  // not test 
});
 */

/* skip() */
test.skip("skip", () => {
  // skip this test
});

test("run", () => {
  // test
});
