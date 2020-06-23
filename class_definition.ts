class Tree {
  constructor(public leaf: string) {
    //public is an access modifier - access modifiers control the accessibility of the members of a class. TS has pubic, private and protected.
    //by default the members are public but you can e_xplicitly add a modifier to them.
    this.leaf = leaf;
  }

  public moveLeaf() {
    console.log(`the ${this.leaf} moves...`);
  }
}

//if public can access outside of the class

let tree1 = new Tree("thic green leaf");
tree1.moveLeaf();

//cant console log tree1.leaf if its a private variable
//if leaf is protected it can be used in an instance of the class

class Point {
  // private _x: number;
  // private y: number;
  //so they cannot be modified after being passed in

  //can prefi_x params below with an access modifier to prevent duplication

  constructor(private _x?: number, private _y?: number) {
    //when you prefi_x, also initialises the param to that field
    //i.e. no need to write _x = this._x
  }

  draw() {
    console.log(" _x: " + this._x, "Y: " + this._y);
  }

  getDistance(another: Point) {
    //...
  }

  get X() {
    return this._x;
    //gives you a way to access the private variables from the outside
    //still inside the class you have access to private variables
  }

  //putting a space between set and get keywords mean you dont have to use the methods to access below
  set X(value) {
    if (value < 0) {
      throw new Error("value cannot be less than 0");
    }
    this._x = value;
  }
}

let point = new Point(1, 2);
let _x = point.X;
point.X = 10;
//must initialise it
//TS can infer type is Point
point.draw();
//when defining object of a custom type, must e_xplicitly allocate memory to it
