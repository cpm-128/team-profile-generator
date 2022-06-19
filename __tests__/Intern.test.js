// require access to the class file
const { expect } = require('expect');
const Intern = require('../lib/Intern')

test('set school in intern constructor', () => {
    const school = 'UNC';
    const intern = new Intern(school);
    intern.school = school;

    expect(intern.school).toBe(school);
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.school.length).toBeGreaterThan(0);
});

test('reset role to intern in intern constructor', () => {
    const role = 'intern';
    const intern = new Intern(role);
    intern.role = role;

    expect(intern.role).toBe(role);
    expect(intern.role).toEqual(expect.stringContaining('intern'));

});