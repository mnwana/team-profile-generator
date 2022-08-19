const Manager = require("../lib/Manager");

test("creates an manager object using strings", () => {
  const manager = new Manager("Marielle", "1", "marielle@fake.com", "1");

  // ensure name and name function return the same / correct values
  expect(manager.name).toBe("Marielle");
  expect(manager.name).toEqual(manager.getName());

  // ensure id and id function return the same / correct values
  expect(manager.id).toBe("1");
  expect(manager.id).toEqual(manager.getId());
  expect(parseInt(manager.id)).toEqual(expect.any(Number));

  // ensure email and email function return the same / correct values
  expect(manager.email).toBe("marielle@fake.com");
  expect(manager.email).toEqual(manager.getEmail());

  // ensure office number is correct
  expect(manager.officeNumber).toBe("1");

  // ensure role is Manager
  expect(manager.getRole()).toBe("Manager");
});

test("creates an manager object using a mix of strings and integers", () => {
  const manager = new Manager("Marielle", 1, "marielle@fake.com", 1);

  // ensure name and name function return the same / correct values
  expect(manager.name).toBe("Marielle");
  expect(manager.name).toEqual(manager.getName());

  // ensure id and id function return the same / correct values
  expect(manager.id).toBe("1");
  expect(manager.id).toEqual(manager.getId());
  expect(parseInt(manager.id)).toEqual(expect.any(Number));

  // ensure email and email function return the same / correct values
  expect(manager.email).toBe("marielle@fake.com");
  expect(manager.email).toEqual(manager.getEmail());

  // ensure office number is correct
  expect(manager.officeNumber).toBe("1");

  // ensure role is Manager
  expect(manager.getRole()).toBe("Manager");
});
