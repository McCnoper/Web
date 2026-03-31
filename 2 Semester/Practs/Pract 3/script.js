"use strict";

class User {
    #age;
    constructor(name, age, profession) {
        this.name = name;
        this.profession = profession;
        this.age = age;
    }

    set age(value) {
        const num = Number(value);
        if (isNaN(num) || num <= 0) {
            throw new Error("Age must be a positive number.");
        }
        this.#age = num;
    }
    get age() { return this.#age; }

    display() {
        const info = `User: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`;
        this._output(info);
    }
    _output(text) {
        alert(text);
        console.log(text);
    }
}

class Admin extends User {
    constructor(name, age, role) {
        super(name, age, "Admin");
        this.role = role;
    }
    display() {
        const info = `Admin: ${this.name}, Access: ${this.role}, Age: ${this.age}`;
        this._output(info);
    }
}

function initApp() {
    try {
        const type = prompt("What type (1 - User, 2 - Admin):");

        if (type !== "1" && type !== "2") throw new Error("Invalid user type!");
        const name = prompt("Enter name:");

        if (!name || name.trim() === "") throw new Error("Name cannot be empty.");
        const age = prompt("Enter age:");

        if (isNaN(Number(age)) || Number(age) <= 0) throw new Error("Invalid age.");

        let person;
        if (type === "1") {
            const prof = prompt("Enter profession:");
            if (!prof) throw new Error("Profession required.");
            person = new User(name, age, prof);
        } else {
            const role = prompt("Enter access level:");
            if (!role) throw new Error("Access level required.");
            person = new Admin(name, age, role);
        }

        person.display();

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

initApp();

class Car {
    #vin;
    constructor(vin,model, year) {
        this.vin = vin;
        this.model = model;
        this.year = year;
    }
    set vin(value) {
        if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(value)) {
            throw new Error("Invalid VIN format.");
        }
        this.#vin = value;
    }
    get vin() { return this.#vin; }

    display() {        
        const info = `Car: ${this.model}, Year: ${this.year}, VIN: ${this.vin}`;
        this._output(info);
    }
    _output(text) {
        alert(text);
        console.log(text);
    }
}
class ElectricCar extends Car {
    constructor(vin, model, year, battery) {
        super(vin, model, year);
        this.battery = battery;
    }
    display() {
        const info = `Electric Car: ${this.model}, Year: ${this.year}, VIN: ${this.vin}, Battery: ${this.battery} kWh`;
        this._output(info);
    }
}

function initCarApp() {
    try {
        const vin = prompt("Enter VIN (17 characters):");
        if (!vin) throw new Error("VIN is required.");
        const model = prompt("Enter model:");
        if (!model) throw new Error("Model is required.");
        const year = prompt("Enter year:");
        if (isNaN(Number(year)) || Number(year) <= 1885) throw new Error("Invalid year.");
        const type = prompt("Is it electric? (yes/no):");
        let car;
        if (type.toLowerCase() === "yes") {
            const battery = prompt("Enter battery capacity (kWh):");
            if (isNaN(Number(battery)) || Number(battery) <= 0) throw new Error("Invalid battery capacity.");
            car = new ElectricCar(vin, model, year, battery);
        } else {
            car = new Car(vin, model, year);
        }
        car.display();
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

initCarApp();