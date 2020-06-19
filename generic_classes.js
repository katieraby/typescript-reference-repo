let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
//both are exactly the same
class objectGenericsClass {
    //class generics constraints is constraining the type 2 variable to only strings. the extend keyword is used here.
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
}
let object1 = new objectGenericsClass("HELLO", "hey");
let object2 = new objectGenericsClass(true, "hey");
//# sourceMappingURL=generic_classes.js.map