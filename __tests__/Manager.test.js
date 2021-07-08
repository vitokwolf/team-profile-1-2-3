const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates managers object', () => {
    const manager = new Manager('victor', 23, 'email', '512');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getRole()).toBe('Manager');

});