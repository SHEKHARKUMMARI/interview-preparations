// Imagine we have an interface for different types of workers in a company:

class Worker {
  work() {
    console.log("Working...");
  }
  eat() {
    console.log("Eating...");
  }
}

// Now, we have two types of workers:

// Office Worker – Works and takes lunch breaks.
// Robot Worker – Works but doesn’t eat.

class OfficeWorker extends Worker {}

class RobotWorker extends Worker {
  eat() {
    throw new Error("Robot cannot eat!");
  }
}

// ❌ Problem: The Robot Worker Violates ISP
// RobotWorker is forced to implement an eat() method it doesn't need.
// Unnecessary methods in a class create confusion and maintenance issues

// 🔹 The Solution: Split Interfaces
// Instead of having one fat interface, we create smaller, specific ones.

class Workable {
  work() {
    console.log("Working...");
  }
}

class Eatable {
  eat() {
    console.log("Eating...");
  }
}

class OfficeWorker extends Workable {
  eat() {
    console.log("Eating lunch...");
  }
}

class RobotWorker extends Workable {}

// ✅ Now, No Class Implements Unnecessary Methods!
// OfficeWorker inherits from Workable and Eatable.
// RobotWorker only inherits from Workable, so no useless eat() method exists
