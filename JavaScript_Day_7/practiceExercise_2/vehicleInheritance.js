// Vehicle base class
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }

    isOld() {
        const currentYear = new Date().getFullYear();
        return (currentYear - this.year) > 10;
    }
}

// Car class extending Vehicle
class Car extends Vehicle {
    constructor(brand, model, year, fuelType) {
        super(brand, model, year);
        this.fuelType = fuelType;
    }

    // Override getInfo() to include fuelType
    getInfo() {
        return `${super.getInfo()}, Fuel Type: ${this.fuelType}`;
    }
}

// Example usage
const myVehicle = new Vehicle('Ford', 'F-150', 2018);
const myCar = new Car('Honda', 'Civic', 2010, 'Gasoline');

const outputElement = document.getElementById('output');
let output = '';

output += '--- Vehicle Details ---\n';
output += myVehicle.getInfo() + '\n';
output += `Is the vehicle old? ${myVehicle.isOld()}\n\n`;

output += '--- Car Details ---\n';
output += myCar.getInfo() + '\n';
output += `Is the car old? ${myCar.isOld()}`;

outputElement.textContent = output;