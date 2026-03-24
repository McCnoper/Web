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