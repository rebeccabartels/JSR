// Create a constructor function that makes a puppy
function Puppy(name, breed) {
  this.name       = name;
  this.breed      = breed;
  this.foodsEaten = [];
  this.eatSomething = function(food) {
    this.foodsEaten.push(food);
  }
  this.introduce = function() {
    console.log("My name is "+ this.name +". I am a "+ this.breed + ". I have eaten "+ this.foodsEaten.join(", ") + ".");
  }
}

var puppy1 = new Puppy("Scottsdale Caudor III", "Scottish Terrier");
puppy1.eatSomething("banana");
puppy1.introduce();

var puppy2 = new Puppy("Vita", "Australian Cattle Dog");
puppy2.eatSomething("kibble");
puppy2.eatSomething("chicken");
puppy2.introduce();

var puppy3 = new Puppy("Charlotte", "French Bulldog");
puppy3.eatSomething("fish");
puppy3.introduce();

// Getting properties using the dot syntax / bracket syntax
console.log(puppy1.name);
console.log(puppy1["name"]);

Puppy.prototype.speak = function() {
  console.log("Woof!");
}

puppy1.speak();