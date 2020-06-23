//pascal naming convention for custom type
const automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles per hour.`);
    },
};
const automobile2 = {
    brand: "Porsche",
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles per hour.`);
    },
};
function car1(automobile) {
    automobile.speed = 250;
    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles per hour.`);
}
car1(automobile);
class AutoMobileClass {
    speedMethod(speed) {
        console.log(`hi ${speed}`);
    }
}
let carObject = new AutoMobileClass();
carObject.speedMethod(5577);
//# sourceMappingURL=interfaces.js.map