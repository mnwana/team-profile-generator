const Employee = require("../lib/Employee");

test("creates an Employee object using strings", () => {
  const employee = new Employee("Marielle", "1", "marielle@fake.com");

  expect(employee.name).toBe("Marielle");
  expect(employee.name).toEqual(employee.getName());

  expect(employee.id).toBe("1");
  expect(parseInt(employee.id)).toEqual(expect.any(Number));
  expect(employee.id).toEqual(employee.getId());

  expect(employee.email).toBe("marielle@fake.com");
  expect(employee.email).toEqual(employee.getEmail());

  expect(employee.getRole()).toBe("Employee");
});

test("creates an Employee object using mix of strings and integers", () => {
    const employee = new Employee("Marielle", 1, "marielle@fake.com");
  
    expect(employee.name).toBe("Marielle");
    expect(employee.name).toEqual(employee.getName());
  
    expect(employee.id).toBe("1");
    expect(parseInt(employee.id)).toEqual(expect.any(Number));
    expect(employee.id).toEqual(employee.getId());
  
    expect(employee.email).toBe("marielle@fake.com");
    expect(employee.email).toEqual(employee.getEmail());
    
    expect(employee.getRole()).toBe("Employee");
  });