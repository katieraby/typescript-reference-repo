class Building {
  windows: string = "Window 1";

  escalator() {
    console.log("The escalator is moving");
  }
}

// const building = new Building();
// building.escalator();

class Building2 extends Building {
  escalator() {
    console.log("The escalator is moving from building 2");
    console.log(this.windows);
  }
}

const building2 = new Building2();
building2.escalator();
