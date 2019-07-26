// The following is the simplest form of factory function; taking arguments and using them to craft a new object with
  // the object literal:
  function cowFactory(name) {
    return {
      name: name,
      talk: function() {
        console.log("Moo, my name is " + this.name);
      }
    };
  }
  var daisy = cowFactory("Daisy"); // create a cow named Daisy
  daisy.talk(); // "Moo, my name is Daisy"
  // It is easy to define private properties and methods in a factory, by including them outside of the returned object.
  // This keeps your implementation details encapsulated, so you can only expose the public interface to your object.
  function cowFactory(name) {
    function formalName() {
      return name + " the cow";
    }
    return {
      talk: function() {
        console.log("Moo, my name is " + formalName());
      }
    };
}
  var daisy = cowFactory("Daisy");
  daisy.talk(); // "Moo, my name is Daisy the cow"
  daisy.formalName(); // ERROR: daisy.formalName is not a function
  
  /////////////////////
  
  // Behaviour factories
  var speaker = function(state) {
    var noise = state.noise || "grunt";
    return {
      speak: function() {
        console.log(state.name + " says " + noise);
      }
    };
  };
  var mover = function(state) {
    return {
      moveSlowly: function() {
        console.log(state.name + " is moving slowly");
      },
      moveQuickly: function() {
        console.log(state.name + " is moving quickly");
      }
    };
  };
  // Object factories
  // Version ≥ 6
  var person = function(name, age) {
    var state = {
      name: name,
      age: age,
      noise: "Hello"
    };
    return Object.assign(
      // Merge our 'behaviour' objects
      {},
      speaker(state),
      mover(state)
    );
  };
  var rabbit = function(name, colour) {
    var state = {
      name: name,
      colour: colour
    };
    return Object.assign({}, mover(state));
  };
  var fred = person("Fred", 42);
  // GoalKicker.com – JavaScript® Notes for Professionals 350
  fred.speak(); // outputs: Fred says Hello
  fred.moveSlowly(); // outputs: Fred is moving slowly
  var snowy = rabbit("Snowy", "white");
  snowy.moveSlowly(); // outputs: Snowy is moving slowly
  snowy.moveQuickly(); // outputs: Snowy is moving quickly
  snowy.speak(); // ERROR: snowy.speak is not a function
