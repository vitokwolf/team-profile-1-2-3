const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Victor', '23', 'email@email.com');
    expect(employee.name).toBe('Victor');
    expect(employee.id).toBe('23');
    expect(employee.email).toBe('email@email.com');
})

test('gets employee name', () => {
    const employee = new Employee('Victor', '23', 'email@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee id', () => {
    const employee = new Employee('Victor', '23', 'email@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('gets employee email', () => {
    const employee = new Employee('Victor', '23', 'email@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})

test('gets employee role', () => {
    const employee = new Employee('Victor', '23', 'email@email.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})