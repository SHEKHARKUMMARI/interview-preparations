/** singleton pattern */

//  using object literals
const singletonObj = {
  name: "singketon",
  getName: function () {
    console.log("name is", this.name);
  },
};
console.log(Object.isFrozen(singletonObj));
Object.freeze(singletonObj);
console.log(Object.isFrozen(singletonObj));
singletonObj.getName();
singletonObj.name = "modified";

console.log("tesing singleton pattern", singletonObj.name);

//  using clss implementation

class SingletonClass {
  constructor(name) {
    this.name = name;
  }
  getName = function () {
    console.log("SingletonClass Name", this.name);
  };
}
const singletonClassObject = new SingletonClass("singletonClass");
Object.freeze(singletonClassObject);

singletonClassObject.name = "modified";
console.log("tesing singleton pattern Class", singletonClassObject.name);

/** Factory Method Pattern */

// Using classes

class Alien {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien("Ali", "I'm Ali the alien!");
console.log(alien1.name); // output: "Ali"

// Using a factory function

function Alien(name, phrase) {
  this.name = name;
  this.phrase = phrase;
  this.species = "alien";
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien2 = new Alien("Ali", "I'm Ali the alien!");

console.log(alien2.name); // output "Ali"
console.log(alien2.phrase); // output "I'm Ali the alien!"
alien2.fly(); // output "Zzzzzziiiiiinnnnnggggg"
