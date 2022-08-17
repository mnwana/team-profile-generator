const Employee = require("../lib/Employee");

test("creates an Employee object using strings", () => {
  const employee = new Employee("Marielle", "1", "marielle@fake.com");

  expect(employee.name).toBe("Marielle");
  expect(employee.id).toBe("1");
  expect(parseInt(employee.id)).toEqual(expect.any(Number));
  expect(employee.email).toBe("marielle@fake.com");
  expect(employee.name).toEqual(employee.getName());
  expect(employee.id).toEqual(employee.getId());
  expect(employee.email).toEqual(employee.getEmail());
  expect(employee.getRole()).toBe("Employee");
});
