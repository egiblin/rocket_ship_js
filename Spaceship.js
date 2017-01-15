module.exports = class Spaceship{
  constructor(name){
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }
  loadCrew(trainedCrew){
    trainedCrew.forEach((name) => {
      this.crew.push(name);
      console.log(`${name} has boarded the ship!`);
    });
  }
  captain(){
    let randomNumber = Math.floor(Math.random() * this.crew.length);
    return this.crew[randomNumber];
  }
  mountPropulsion(rocket){
    this.propulsion = rocket;
    console.log("Rockets have been mounted.");
  }
  takeoff(){
    if (this.propulsion.fire()){
      console.log("BOOM BOOM BOOM BLAST OFF");
    } else {
      console.log("Womp womp");
    }

  }
};
