// 🔹 The Problem: Tight Coupling
// Imagine we have a FrontendDeveloper and BackendDeveloper

class FrontendDeveloper {
  writeCode() {
    return "Writing React code...";
  }
}

class BackendDeveloper {
  writeCode() {
    return "Writing Node.js code...";
  }
}

class Project {
  constructor() {
    this.frontendDev = new FrontendDeveloper();
    this.backendDev = new BackendDeveloper();
  }

  build() {
    console.log(this.frontendDev.writeCode());
    console.log(this.backendDev.writeCode());
  }
}

const project = new Project();
project.build();

// ❌ Problem: Tight Coupling
// Project directly depends on FrontendDeveloper and BackendDeveloper.
// If we add a Mobile Developer, we must modify the Project class.
// The Project class shouldn’t worry about specific developer types.

// 🔹 The Solution: Use Abstractions
// Instead of directly depending on concrete classes, we create an interface (Developer) that different types of developers will implement.

class Developer {
  writeCode() {
    throw new Error("Method must be implemented");
  }
}

class FrontendDeveloper extends Developer {
  writeCode() {
    return "Writing React code...";
  }
}

class BackendDeveloper extends Developer {
  writeCode() {
    return "Writing Node.js code...";
  }
}

// ✅ Now Project depends on an abstraction (Developer), not concrete classes.
class Project {
  constructor(developers) {
    this.developers = developers;
  }

  build() {
    this.developers.forEach((developer) => console.log(developer.writeCode()));
  }
}

// ✅ Now we can easily add a new developer without modifying Project!
class MobileDeveloper extends Developer {
  writeCode() {
    return "Writing Flutter code...";
  }
}

const team = [
  new FrontendDeveloper(),
  new BackendDeveloper(),
  new MobileDeveloper(),
];
const project = new Project(team);
project.build();

// ✅ How DIP Improves the Code
// ✔️ High-level module (Project) depends on abstraction (Developer), not concrete classes.
// ✔️ Easily extendable – we can add MobileDeveloper without modifying Project.
// ✔️ Less maintenance – changing BackendDeveloper won’t break Project.
