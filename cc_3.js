// U89173488

// Step 1: Implement the Car class with a constructor

class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}
  module.exports = Car;