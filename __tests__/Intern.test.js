const Intern = require('../lib/Intern');

test('creates managers object', () => {
    const intern = new Intern('name', 23, 'email','Intern', 'school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern role', () => {
    const intern = new Intern('name', 23, 'email', 'Intern', 'school');
    expect(intern.getRole()).toBe('Intern');
});

test('gets intern github link', () => {
    const intern = new Intern('name', 23, 'email', 'Intern', 'school');
    expect(intern.getSchool()).toEqual(expect.any(String));
});