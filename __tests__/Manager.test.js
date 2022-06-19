// require access to the class file
const Manager = require('../lib/Manager.js')

test('set office number in manager constructor', () => {
    const officeNumber = 12;
    const manager = new Manager(officeNumber);
    manager.officeNumber = officeNumber;

    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.officeNumber).toBeGreaterThanOrEqual(0);
});

test('reset role to manager in manager constructor', () => {
    const role = 'manager';
    const manager = new Manager(role);
    manager.role = role;

    expect(manager.role).toBe(role);
    expect(manager.role).toEqual(expect.stringContaining('manager'));
});