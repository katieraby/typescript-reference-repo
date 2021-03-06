///<reference path="module1_internal.ts"/>

import thisSpace = myNameSpace.displayData;

console.log(thisSpace("Hello this is Katie"));

// Namespaces are simply named JavaScript objects in the global namespace. This makes namespaces a very simple construct to use. Unlike modules, they can span multiple files, and can be concatenated using --outFile. Namespaces can be a good way to structure your code in a Web Application, with all dependencies included as <script> tags in your HTML page.

//compile the namespace differently
//tsc namespace --outFile namespace.js
