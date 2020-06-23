let car;
let engine;
let isFast;
car = "BMW";
engine = 5.4;
isFast = true;
class Car {
}
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, "a", false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//best to explicitly set the values in enums because if another color was added later on in between, that would change the values
let backgroundColor = Color.Red;
//# sourceMappingURL=types.js.map