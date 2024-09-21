/*
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b: number = 0): number => {
  return a + b;
};

// /**
//  * Calculates the total sum of an array of numbers.
//  * @param values - An array of numbers or strings.
//  * @returns The sum of the numbers.
//  */
export const sumArray = (values: (number | string)[]): number => {
  return values.reduce<number>((acc, curr) => acc + Number(curr), 0);
};

// Create type "Person" with the following properties:
// - name: string
// - age: number
export type Person = {
  name: string;
  age: number;
}

// Create type "User" which extends "Person" and adds the following properties:
// - type: 'user' (literal type)
export type User = Person & { type: 'user'};

// Create type "Admin" which extends "Person" and adds the following properties:
// - isAdmin: boolean (modified to pass tests)
export type Admin = Person & { isAdmin: boolean };

// Create a type "AllPeople" which is a union of "Person", "User", and "Admin"
export type AllPeople = Person | User | Admin;

// Add function "isAdmin" that returns true if "u" is an admin
export const isAdmin = (u: AllPeople) => {
  return 'isAdmin' in u && u.isAdmin;
};

// Add function "isUser" that returns true if "u" is a user
export const isUser = (u: AllPeople) => {
  return 'type' in u && u.type === 'user';
};

/**
 * If a "Admin" calls userGreetingMessage, return "Hello, {name}. You are an admin."
 * If a "User" calls userGreetingMessage, return "Hello, {name}. You are a user."
 * If a "Person" calls userGreetingMessage, return "Hello, {name}. You do not have access."
 * @param user - The user to greet
 * @returns A greeting message
 */
export const userGreetingMessage = (u: AllPeople) => {
  if (isAdmin(u)) {
    return `Hello, ${u.name}. You are an admin.`;
  } else if (isUser(u)) {
    return `Hello, ${u.name}. You are a user.`;
  } else {
    return `Hello, ${u.name}. You do not have access.`;
  }
};
