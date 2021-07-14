const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates managers object', () => {
    const engineer = new Engineer('name', 23, 'email', 'username');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer role', () => {
    const engineer = new Engineer('name', 23, 'email', 'username');
    expect(engineer.getRole()).toBe('Engineer');
});

test('gets engineer github link', () => {
    const engineer = new Engineer('name', 23, 'email', 'username');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});