interface AutomobileInterface {
  brand?: string;
  speed?: number;
  //question mark after variable signifies optional
  speedMethod?(velocidad: number): void;
}

interface AutomobileInterface2 extends AutomobileInterface {
  brand: string;
}

const automobile: AutomobileInterface = {
  brand: "BMW",
  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles per hour.`);
  },
};

const automobile2: AutomobileInterface2 = {
  brand: "Porsche",
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles per hour.`);
  },
};

function car1(automobile: AutomobileInterface) {
  automobile.speed = 250;

  console.log(
    `this ${automobile.brand} is going at ${automobile.speed} miles per hour.`
  );
}

car1(automobile);

class AutoMobileClass implements AutomobileInterface {
  //class implements the interface into this class
  brand: string;
  speed: number;

  speedMethod(speed) {
    console.log(`hi ${speed}`);
  }
}

let carObject = new AutoMobileClass();
carObject.speedMethod(5577);
