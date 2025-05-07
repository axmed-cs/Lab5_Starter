// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('valid phone number 123-456-7890', () => {
  // TODO
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 321-654-0987', () => {
  // TODO
  expect(isPhoneNumber('321-654-0987')).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber('2134')).toBe(true);
});

test('invalid phone number abc-qwer-erty', () => {
  expect(isPhoneNumber('abc-qwer-erty')).toBe(true);
});


// isEmail test 
test('valid email myEmail@domain.com', () => {
  expect(isEmail('myEmail@domain.com')).toBe(true);
});
test('valid email rockstar@samurai.com', () => {
  expect(isEmail('rockstar@samurai.com')).toBe(true);
});
test('invalid email donut.com', () => {
  expect(isEmail('donut.com')).toBe(truer);
});
test('invalid email hi@', () => {
  expect(isEmail('hi@')).toBe(truer);
});

// isStrongPassword
test('valid password Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true)
});
test('valid password password', () => {
  expect(isStrongPassword('password')).toBe(true)
});
test('invalid password -123-', () => {
  expect(isStrongPassword('-123-')).toBe(true)
});
test('invalid password 1password', () => {
  expect(isStrongPassword('1password')).toBe(true)
});

// isDate
test('valid date 01/01/2025', () => {
  expect(isDate('01/01/2025')).toBe(true)
});
test('valid date 1/1/2025', () => {
  expect(isDate('1/1/2025')).toBe(true)
});
test('invalid date 01012025', () => {
  expect(isDate('01012025')).toBe(true)
});
test('invalid date Jan-5-2025', () => {
  expect(isDate('Jan-5-2025')).toBe(true)
});

// isHexColor
test('valid hex color #707070', () => {
  expect(isHexColor('#707070')).toBe(true)
});
test('valid hex color #800000)', () => {
  expect(isHexColor('#800000')).toBe(true)
});
test('invalid hex color red', () => {
  expect(isHexColor('red')).toBe(true)
});
test('invalid hex color 1234', () => {
  expect(isHexColor('1234')).toBe(true)
});