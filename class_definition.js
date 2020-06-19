class Tree {
    constructor(leaf) {
        this.leaf = leaf;
        //public is an access modifier - access modifiers control the accessibility of the members of a class. TS has pubic, private and protected.
        //by default the members are public but you can explicitly add a modifier to them.
        this.leaf = leaf;
    }
    moveLeaf() {
        console.log(`the ${this.leaf} moves...`);
    }
}
//if public can access outside of the class
let tree1 = new Tree("thic green leaf");
tree1.moveLeaf();
//cant console log tree1.leaf if its a private variable
//if leaf is protected it can be used in an instance of the class
//# sourceMappingURL=class_definition.js.map