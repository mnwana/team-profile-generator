const Engineer = require("../lib/Engineer");

test("creates an engineer object using strings", () => {
  const engineer = new Engineer("Marielle", "1", "marielle@fake.com","mnwana");

  expect(engineer.name).toBe("Marielle");
  expect(engineer.name).toEqual(engineer.getName());

  expect(engineer.id).toBe("1");
  expect(parseInt(engineer.id)).toEqual(expect.any(Number));
  expect(engineer.id).toEqual(engineer.getId());

  expect(engineer.email).toBe("marielle@fake.com");
  expect(engineer.email).toEqual(engineer.getEmail());

  expect(engineer.github).toEqual("mnwana");
  expect(engineer.getGithub()).toBe("mnwana");
  expect(engineer.getGithub()).toEqual(engineer.github);

  expect(engineer.getRole()).toBe("Engineer");
});

test("creates an engineer object using a mix of strings and integers", () => {
  const engineer = new Engineer("Marielle", 1, "marielle@fake.com","mnwana");

  expect(engineer.name).toBe("Marielle");
  expect(engineer.name).toEqual(engineer.getName());

  expect(engineer.id).toBe("1");
  expect(parseInt(engineer.id)).toEqual(expect.any(Number));
  expect(engineer.id).toEqual(engineer.getId());

  expect(engineer.email).toBe("marielle@fake.com");
  expect(engineer.email).toEqual(engineer.getEmail());

  expect(engineer.github).toEqual("mnwana");
  expect(engineer.getGithub()).toBe("mnwana");
  expect(engineer.getGithub()).toEqual(engineer.github);

  expect(engineer.getRole()).toBe("Engineer");
});