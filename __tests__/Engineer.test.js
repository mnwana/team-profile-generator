const Engineer = require("../lib/Engineer");

test("creates an engineer object using strings", () => {
  // create engineer variable
  const engineer = new Engineer("Marielle", "1", "marielle@fake.com", "mnwana");

  // ensure name and name function return the same / correct values
  expect(engineer.name).toBe("Marielle");
  expect(engineer.name).toEqual(engineer.getName());

  // ensure id and id function return the same / correct values
  expect(engineer.id).toBe("1");
  expect(parseInt(engineer.id)).toEqual(expect.any(Number));
  expect(engineer.id).toEqual(engineer.getId());

  // ensure email and email function return the same / correct values
  expect(engineer.email).toBe("marielle@fake.com");
  expect(engineer.email).toEqual(engineer.getEmail());

  // ensure github and github function return the same / correct values
  expect(engineer.github).toEqual("mnwana");
  expect(engineer.getGithub()).toEqual(engineer.github);

  // ensure role is set to Engineer
  expect(engineer.getRole()).toBe("Engineer");
});

test("creates an engineer object using a mix of strings and integers", () => {
  const engineer = new Engineer("Marielle", 1, "marielle@fake.com", "mnwana");

  // ensure name and name function return the same / correct values
  expect(engineer.name).toBe("Marielle");
  expect(engineer.name).toEqual(engineer.getName());

  // ensure id and id function return the same / correct values
  expect(engineer.id).toBe("1");
  expect(parseInt(engineer.id)).toEqual(expect.any(Number));
  expect(engineer.id).toEqual(engineer.getId());

  // ensure email and email function return the same / correct values
  expect(engineer.email).toBe("marielle@fake.com");
  expect(engineer.email).toEqual(engineer.getEmail());

  // ensure github and github function return the same / correct values
  expect(engineer.github).toEqual("mnwana");
  expect(engineer.getGithub()).toEqual(engineer.github);

  // ensure role is set to Engineer
  expect(engineer.getRole()).toBe("Engineer");
});
