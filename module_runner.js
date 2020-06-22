"use strict";
// import object = require("./module_external");
Object.defineProperty(exports, "__esModule", { value: true });
//modern import statement below
// import * as object from "./module_external";
const module_external_1 = require("./module_external");
//create aliases
// import object2 = object.displayData;
console.log(module_external_1.displayData("Hey, testing again!"));
console.log(module_external_1.name);
//# sourceMappingURL=module_runner.js.map