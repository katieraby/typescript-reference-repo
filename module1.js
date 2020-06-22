var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Katie";
    //still need to use export keyword on variables
    function displayData(value) {
        //must use export keyword for TS to recognise this
        return value;
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
//# sourceMappingURL=module1.js.map