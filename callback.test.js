function fetchUser(id, cb){
  setTimeout(() => {
    console.log("wait 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com"
    };
    cb(user);
  }, 100)
}

/* test("fetch an user", () => {
  fetchUser(1, user => {
    expect(user).toEqual({
      id:1,
      name: "User1",
      email: "1@test.com"
    })
  })
})

test("fetch an user", () => {
  fetchUser(2, user => {
    expect(user).toEqual({
      id:1,
      name: "User1",
      email: "1@test.com"
    })
  })
})
 */

test("fetch an user", (test) => {
  fetchUser(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    test();
  });
});



