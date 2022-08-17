const Intern = require("../lib/Intern");

test("creates an intern object using strings", () => {
  const intern = new Intern("Marielle", "1", "marielle@fake.com","Ohio State");

  expect(intern.name).toBe("Marielle");
  expect(intern.name).toEqual(intern.getName());
  expect(intern.id).toBe("1");
  expect(parseInt(intern.id)).toEqual(expect.any(Number));
  expect(intern.id).toEqual(intern.getId());

  expect(intern.email).toBe("marielle@fake.com");
  expect(intern.email).toEqual(intern.getEmail());

  expect(intern.school).toBe("Ohio State");
  expect(intern.getSchool()).toBe("Ohio State");

  expect(intern.getRole()).toBe("Intern");
});
