// require access to the class file
const Engineer = require('../lib/Engineer')

test('set github account username in engineer constructor', () => {
    const github = 'davehub'
    const engineer = new Engineer(github);
    engineer.github = github;

    expect(engineer.github).toBe(github);
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github.length).toBeGreaterThan(0);
});

test('reset role to engineer in engineer constructor', () => {
    const role = 'engineer';
    const engineer = new Engineer(role);
    engineer.role = role;

    expect(engineer.role).toBe(role);
    expect(engineer.role).toEqual(expect.stringContaining('engineer'));
});