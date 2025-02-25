//with the help of factory function

// open this page using index.html page
// function personmaker(name, age) {
//   let person = {
//     name: name,
//     age: age,
//     function() {
//       console.log(`hyy ${this.name} your age is ${this.age}`);
//     },
//   };
//   return person;
// }

// let p1 = personmaker("vishnu", 22);
// let q1 = personmaker("krsihan", 23);

// console.log(p1);
// console.log(q1);

//with the help of constructor function
// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// person.prototype.talk = function () {
//   console.log(`hyy ${this.name} your age is ${this.age}`);
// };

// let p1 = new person("vishnu", 22);
// let p2 = new person("krishan", 23);
// console.log(p1);
// console.log(p2);

//using class

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`hyy ${this.name} your age is ${this.age}`);
//   }
// }
// let p1 = new person("vishnu", 22);
// let p2 = new person("krishan", 23);
// console.log(p1, p2);

// class vikashschool {
//   constructor(name) {
//     this.name = name;
//   }
//   talk() {
//     console.log(`hyy my name is ${this.name}`);
//   }
// }
// let n1 = new vikashschool("vikash");
// console.log(n1);

//using inheritance classes

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  call() {
    console.log(`hyy your name is ${this.name}`);
  }
}

class student extends person {
  constructor(name, age, no) {
    super(name, age); //call parent calss
    this.no = no;
  }
}
class teacher extends person {
  constructor(name, age, sub) {
    super(name, age); //call parent class
    this.sub = sub;
  }
}

let s1 = new student("vishnu", 22, 100);
console.log(s1);
let t1 = new teacher("vikash", 44, 90);
console.log(t1);
