// U89173488

// Step 1: Implement the Car class with a constructor

class Car {
    constructor(make, speed) {
      this.make = make
      this.speed = speed
    }

    // Step 2: Add the accelerate method
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    // Step 3: Add the brake method
    brake() {
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`)

    }
}

// step 4: Test car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate(); 
car1.accelerate(); 
car1.brake();      
car1.brake();      

car2.accelerate(); 
car2.accelerate(); 
car2.brake();      
car2.brake();      

