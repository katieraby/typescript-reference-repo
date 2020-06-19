class People {
    //abstract class is used for modelling what you want other classes to have to inherit from
    displayData() {
        //can create abstract methods too
        console.log("some data");
    }
}
class Kids extends People {
}
let kidsClass = new Kids();
kidsClass.displayData();
//cannot instantiate an abstract class but can extend it
//# sourceMappingURL=abstract_class.js.map