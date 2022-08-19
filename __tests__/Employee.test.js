const Employee = require("../lib/Employee");

test("creates an Employee object using strings", () => {
  const employee = new Employee("Marielle", "1", "marielle@fake.com");

  // ensure name and name function return the same / correct values
  expect(employee.name).toBe("Marielle");
  expect(employee.name).toEqual(employee.getName());

  // ensure id and id function return the same / correct values
  expect(employee.id).toBe("1");
  expect(parseInt(employee.id)).toEqual(expect.any(Number));
  expect(employee.id).toEqual(employee.getId());

  // ensure email and email function return the same / correct values
  expect(employee.email).toBe("marielle@fake.com");
  expect(employee.email).toEqual(employee.getEmail());

  // ensure role is Employee
  expect(employee.getRole()).toBe("Employee");
});

test("creates an Employee object using mix of strings and integers", () => {
  const employee = new Employee("Marielle", 1, "marielle@fake.com");

  // ensure name and name function return the same / correct values
  expect(employee.name).toBe("Marielle");
  expect(employee.name).toEqual(employee.getName());

  // ensure id and id function return the same / correct values
  expect(employee.id).toBe("1");
  expect(parseInt(employee.id)).toEqual(expect.any(Number));
  expect(employee.id).toEqual(employee.getId());

  // ensure email and email function return the same / correct values
  expect(employee.email).toBe("marielle@fake.com");
  expect(employee.email).toEqual(employee.getEmail());

  // ensure role is Employee
  expect(employee.getRole()).toBe("Employee");
});
