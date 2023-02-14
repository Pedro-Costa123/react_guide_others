//Primitives: number, string, boolean
let age: number;
age = 12;

let userName: string;
userName = "Pedro";

let isPerson: boolean;
isPerson = true;

//Complex: Arrays, Objects
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: { name: string; age: number };
person = {
  name: "Pedro",
  age: 23,
};

let persons: { name: string; age: number }[]; //array of objects

//Type inference
let course = "React Guide 2023";
//course = 1234;

//Union Types
let variable: string | number | boolean = "Example";
variable = 123;
variable = true;

//Type aliases
type Car = {
  license: string;
  cc: number;
};
let car1: Car = {
  license: "123-123-123",
  cc: 12345,
};

//Function and types
function add(a: number, b: number): number {
  return a + b;
}

//Arrow function
const add2 = (a: number, b: number): number => {
  return a + b;
};

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const updatedArray = insertAtBeginning([1, 2, 3], -1); //[-1, 1, 2, 3]
const updatedArray2 = insertAtBeginning(["a", "b", "c"], "d"); //[d, a, b, c]
