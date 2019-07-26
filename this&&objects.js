let cat = "kot";
const roman = {
  kot: "pije"
};

console.log(roman.kot);

roman[cat] = "nie pije";

console.log(roman.kot);

//Object wit get and set///////////////////////////////////////////////////////////////

const o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set b(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.b = 50;
console.log(o.b); // 26

// Creating Object cant create new instances///////////////////////////////////////////////////////////////
var obj = {
  name: "name",
  age: "age",
  printInfo: function() {
    console.log(this.name);
    console.log(this.age);
  }
};

// Initializing the parameters.///////////////////////////////////////////////////////////////
obj.name = "Vineet";
obj.age = 19;

// Using method of the object.///////////////////////////////////////////////////////////////
obj.printInfo();

// Function acting as a Class.///////////////////////////////////////////////////////////////

function copyClass(name, age) {
  this.name = name;
  this.age = age;
  this.printInfo = function() {
    console.log(this.name);
    console.log(this.age);
  };
}

var obj = new copyClass("Vineet", 20);

// Calling the method of copyClass.
obj.printInfo();

///////ITERATION///////////////////////////////////////////////////////////////
for (let key in obj) {
  console.log(key + " mydata is " + obj[key]);
}

////////BIND this///////////////////////////////////////////////////////////////

let dog = {
  sound: "hau",
  makeVoice() {
    console.log(this.sound);
  }
};

dog.makeVoice();
let doggo = dog.makeVoice;
doggo();
let doggo2 = doggo.bind(dog);
doggo2();

////////GET AND SET///////////////////////////////////////////////////////////////
class Character {
  constructor(str) {
    this._strength = str;
    this._dps = this._strength * 100;
  }

  get strength() {
    return this._strength;
  }

  get dps() {
    return this._dps;
  }

  set strength(value) {
    this._strength = value;
    this._dps = this._strength * 100;
  }
}

const Andy = new Character(20)
console.log(Andy.strength)//20
console.log(Andy.dps)//2000
Andy.strength = 100
console.log(Andy.strength)//100
console.log(Andy.dps)//10000
Andy.dps = 300//cant set dps do not work but do not throw errors either
console.log(Andy.dps)//10000




























