let rocket = {
  fuel: 0,
  addFuel(amount){
    this.fuel += amount;
    console.log(`${this.fuel} gallons of fuel.`);
  },
  fire(){
    if (this.fuel > 0){
      this.fuel --;
      console.log("The engines have fired!");
      console.log(`After firing, we have ${this.fuel} gallons of fuel remaining.`);
      return true;
    } else {
      console.log("There is insufficient fuel.");
      return false;
    }
  }
};

module.exports = rocket;
