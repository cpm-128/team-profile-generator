// require access to the class file
const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee;

    expect(typeof(employee)).toBe("object");
});

test('set name in employee constructor', () => {
    const name = 'Dave';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
});

test('set id in employee constructor', () => {
    const id = 1;
    const employee = new Employee(id);
    employee.id = id;

    expect(employee.id).toBe(id);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.id).toBeGreaterThanOrEqual(1);
});

test('set email in employee constructor', () => {
    const email = 'dave@google.com';
    const employee = new Employee(email);
    employee.email = email;

    expect(employee.email).toBe(email);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email.length).toBeGreaterThan(0);
});

test('set role in employee constructor', () => {
    const role = 'employee';
    const employee = new Employee(role);
    employee.role = role;

    expect(employee.role).toBe(role);
    expect(employee.role).toEqual(expect.stringContaining('employee'));
});