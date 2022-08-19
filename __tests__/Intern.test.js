const Intern = require("../lib/Intern");

test("creates an intern object using strings", () => {
  const intern = new Intern("Marielle", "1", "marielle@fake.com", "Ohio State");

  // ensure name and name function return the same / correct values
  expect(intern.name).toBe("Marielle");
  expect(intern.name).toEqual(intern.getName());

  // ensure id and id function return the same / correct values
  expect(intern.id).toBe("1");
  expect(parseInt(intern.id)).toEqual(expect.any(Number));
  expect(intern.id).toEqual(intern.getId());

  // ensure email and email function return the same / correct values
  expect(intern.email).toBe("marielle@fake.com");
  expect(intern.email).toEqual(intern.getEmail());

  // ensure school and school function return the same / correct values
  expect(intern.school).toBe("Ohio State");
  expect(intern.getSchool()).toBe("Ohio State");

  // ensure role is Intern
  expect(intern.getRole()).toBe("Intern");
});

test("creates an intern object using a mix of strings and integers", () => {
  const intern = new Intern("Marielle", 1, "marielle@fake.com", "Ohio State");

  // ensure name and name function return the same / correct values
  expect(intern.name).toBe("Marielle");
  expect(intern.name).toEqual(intern.getName());

  // ensure id and id function return the same / correct values
  expect(intern.id).toBe("1");
  expect(parseInt(intern.id)).toEqual(expect.any(Number));
  expect(intern.id).toEqual(intern.getId());

  // ensure email and email function return the same / correct values
  expect(intern.email).toBe("marielle@fake.com");
  expect(intern.email).toEqual(intern.getEmail());

  // ensure school and school function return the same / correct values
  expect(intern.school).toBe("Ohio State");
  expect(intern.getSchool()).toBe("Ohio State");

  // ensure role is Intern
  expect(intern.getRole()).toBe("Intern");
});
