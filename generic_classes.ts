let array1: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];
//both are exactly the same

class objectGenericsClass<TYPE1, TYPE2 extends string> {
  //class generics constraints is constraining the type 2 variable to only strings. the extend keyword is used here.
  constructor(public value1: TYPE1, public value2: TYPE2) {}
}

let object1 = new objectGenericsClass<string, string>("HELLO", "hey");
let object2 = new objectGenericsClass<boolean, string>(true, "hey");
