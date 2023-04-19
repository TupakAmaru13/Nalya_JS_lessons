console.log("class Animal===========================================")

class Animal {
   constructor(name, eyes) {
      this.name = name;       //this refers to current object
      this.eyes = eyes;
      this.brain = 'brain';
      this.spine = 'spine';
   }
   getName() {
      return (`The name of the animal is ${this.name}.`)
   }

   isBreath(){
      return true
   }

   isReproduce(){
      return true
   }

   canEat() {
      console.log(`The ${this.name} can eat`)
   }
}
// Making object with the help of the constructor
let animal1 = new Animal("animal");
let animal2 = new Animal('salmon', "blue");

console.log(animal1.name.toUpperCase());
console.log(animal1.getName())
animal1.eyes = "yellow"
console.log("Eyes color is "+ animal1.eyes);
animal2.canEat()

console.log("class Mammals===========================================")

class Mammals extends Animal {
   //ovberrides cunstructor
   constructor(name, eyes ) {  
      super(name, eyes)
      this.skin = "fur"
      this.legs = 4
      this.lungs = 'lungs'
   }

   setSkin(skin) {
      this.skin = skin
      return this.skin
   }
   
   showBodyParts() {
      console.log(`${this.name} has ${this.legs} legs, ${this.skin}.`)
   }

   breath(){
      console.log(`This ${this.name} breath with ${this.lungs}.`)
   }

   feedKids(){
      console.log(`This animal feeds its kids milk.`)
   }

   reproduceType(){
      return 'baby'
   }

}
let mammal1 = new Mammals("mammal", 'green')
console.log(mammal1.name.toUpperCase());
console.log(mammal1.getName())
console.log(mammal1.eyes);
mammal1.canEat()
mammal1.showBodyParts()
mammal1.breath()
mammal1.feedKids()


console.log("class Predators===========================================")

class Predators extends Mammals {
   //ovberrides cunstructor
   constructor(name, eyes) {
      super(name, eyes)
      this.claws = 'claws'  //animal nails
      this.fangs = 'fangs'  //sharp teeth
   }

   canEat() {
      console.log(`The ${this.name} can eat meat.`)
   }

   showBodyParts() {
      console.log(`${this.name} has ${this.legs} legs, ${this.skin} and sharp ${this.claws} and ${this.fangs}.`)
   }

  
}
let predator1 = new Predators("predator", 'green')
console.log(predator1.name.toUpperCase());
console.log(predator1.getName())
//console.log(predator1.eyes);
predator1.canEat()
predator1.showBodyParts()

console.log("class Cats===========================================")


class Cats extends Predators {
   //ovberrides cunstructor
   constructor(name, eyes, nikName) {
      super(name, eyes)
      this.nikName = nikName  
   }

   moves(){
      console.log(`${this.name} moves softly`)
   }
   sayMeow() {
      console.log(`This ${this.name} says meow`)
   }
   
}
//tiger is catsObject
let tiger = new Cats("tiger", 'green', "Prosha")
console.log(tiger.name.toUpperCase());
console.log(tiger.nikName.toUpperCase())
console.log(tiger.eyes);
tiger.canEat()

// you can use two ways to set a property
//tiger.setSkin("red fur with black stripes")//1
tiger.skin = "red fur"//2
console.log(tiger.skin)
tiger.showBodyParts()
tiger.moves()
tiger.sayMeow()




