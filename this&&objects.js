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

//arrow
class Cat {
  constructor(a, b) {
    this._a = a;
    this.b = b;
  }
  get a() {
    return this._a + 1;
  }
  static miau() {
    console.log("mreee");
  }
  feed() {
    return this.a + this.b;
  }
  feed2 = () => {
    return this.a + this.b;
  };
}

const miol = new Cat(1, 2);
console.log(miol._a, miol.a, miol.b); //1 2 2
Cat.miau();
miol.feed(); //4
miol.feed2(); //4
const ran = miol.feed(); // 4
const ran2 = miol.feed2(); //4

const ran3 = miol.feed;
const ran4 = miol.feed2;
ran3(); //undefined
ran4(); //4
// test it on google main page 
const ii = document.getElementById("fakebox-input");

ii.addEventListener("click", function() {
  console.log(this); //input
});

ii.addEventListener("click", function(e) {
  console.log(this, e); //input //mouseclik
});

ii.addEventListener("click", () => {
  console.log(this); //window
});

ii.addEventListener("click", e => {
  console.log(this, e); //window //mouseclick
});

function log(e) {
  console.log(this, e);
}
const log2 = e => {
  console.log(this, e);
};

ii.addEventListener("click", log); //input //mouseclick
ii.addEventListener("click", e => log(e)); //window //mouseclick
ii.addEventListener("click", log2); //window//mousecliuck
ii.addEventListener("click", e => log2(e)); //window//mousecliuck
//not use arrow in
//object literal methods
//object prototype
//callback functions with dynami  context
//Invoking constructors


////
class Sc2 {
  constructor() {
    this.a = 1;
  }
  kotek(e) {
    return [e, this];
  }
  logger() {
    setTimeout(function() {
      console.log(this);
    }, 1000);
  }
}

const cat = new Sc2();

cat.logger(); //  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

class Sc3 {
  constructor() {
    this.a = 1;
  }
  kotek(e) {
    return [e, this];
  }
  logger() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}

const cat2 = new Sc3();

cat2.logger(); //Sc3

//
class Sc3 {
  constructor() {
    this.a = 1;
  }
  kotek(e) {
    return [e, this];
  }
  logger() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}

const cat2 = new Sc3();
document.addEventListener("click", cat2.logger); //document
document.addEventListener("click", () => cat2.logger()); //Sc3

















