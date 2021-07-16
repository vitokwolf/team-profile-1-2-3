const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('name', 23, 'email@email.com', 'Employee');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
})

test('gets employee name', () => {
    const employee = new Employee('name', 23, 'email@email.com', 'Employee');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('name', 23, 'email@email.com', 'Employee');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('name', 23, 'email@email.com', 'Employee');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('gets employee role', () => {
    const employee = new Employee('name', 23, 'email@email.com', 'Employee');

    expect(employee.getRole()).toEqual(expect.any(String));
})