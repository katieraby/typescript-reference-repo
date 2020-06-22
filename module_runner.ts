// import object = require("./module_external");

//modern import statement below
// import * as object from "./module_external";

import { displayData, name as myName } from "./module_external";

//create aliases
// import object2 = object.displayData;

console.log(displayData("Hey, testing again!"));
console.log(myName);
