let car: string;
let engine: number;
let isFast: boolean;

car = "BMW";
engine = 5.4;
isFast = true;

class Car {
  brand: string;
}

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

//best to explicitly set the values in enums because if another color was added later on in between, that would change the values

let backgroundColor = Color.Red;
