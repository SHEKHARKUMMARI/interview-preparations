// Imagine we have a class Bird, and we create a subclass Penguin.

class Bird {
  fly() {
    console.log("I am flying!");
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {}

const sparrow = new Sparrow();
sparrow.fly(); // ✅ "I am flying!"

const penguin = new Penguin();
penguin.fly();

// ❌ Why does this violate LSP?
// The Penguin class extends Bird, but penguins can't fly.
// Calling .fly() on a Penguin breaks the expected behavior of a Bird.
// Penguin is not a true substitute for Bird.

// ✅ Good Example (Following LSP)
// Solution: Use Proper Hierarchy
// Instead of making Penguin a subclass of Bird, we can create a more meaningful hierarchy.

class Bird {
  eat() {
    console.log("I can eat");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("I am flying!");
  }
}

class Sparrow extends FlyingBird {}

class Penguin extends Bird {
  swim() {
    console.log("I am swimming!");
  }
}

const sparrow = new Sparrow();
sparrow.fly(); // ✅ "I am flying!"

const penguin = new Penguin();
penguin.swim(); // ✅ "I am swimming!"

// ✅ Why is this better?
// Penguin does not inherit a fly() method it can't use.
// The class hierarchy is more meaningful and subclasses follow expected behavior.
// We separate birds that can fly and those that can't, following LSP correctly.
