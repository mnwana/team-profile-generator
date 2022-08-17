const Manager = require("../lib/Manager");

test("creates an manager object using strings", () => {
  const manager = new Manager("Marielle", "1", "marielle@fake.com", "1");

  expect(manager.name).toBe("Marielle");
  expect(manager.name).toEqual(manager.getName());

  expect(manager.id).toBe("1");
  expect(manager.id).toEqual(manager.getId());
  expect(parseInt(manager.id)).toEqual(expect.any(Number));

  expect(manager.email).toBe("marielle@fake.com");
  expect(manager.email).toEqual(manager.getEmail());

  expect(manager.officeNumber).toBe("1");
  
  expect(manager.getRole()).toBe("Manager");
});
