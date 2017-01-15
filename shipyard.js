let Spaceship = require("./Spaceship");
let CrewMember = require("./CrewMember");
let rocket = require("./Rocket");


let ourShip = new Spaceship("S.S. John Glenn");
let crewNames = ["Divock", "Roberto", "Philipe", "Sadio", "Jordan", "Emre", "Dejan", "Nathaniel", "James", "Loris", "Robert", "Georginio"];

let trainCrew = (crew) => {
    crew.forEach(function(name){
      name.trained = true;
    });
};

let countdown = (time, ship) => {
  if (time !== 0 ){
    setTimeout (() => {
      console.log(`${time}...`);
      time --;
      countdown(time, ship);
    }, 1000);
  } else {
    console.log("Blast off!");
    ship.takeoff();
  }
};

let launchpad = (ship, crewmembers, rocket) => {
  console.log("A new ship is taking off.");
  console.log(`${ship.name} is set to launch for a mission to Mars.`);
  ship.loadCrew(crewmembers);
  console.log(`${ship.captain()} will captain our flight!`);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(500);
  countdown(10, ship);
};

trainCrew(crewNames);

launchpad(ourShip, crewNames, rocket);
