"use strict";

const validateRange = (min, max) => (value) => {
    const num = Number(value);
    return !isNaN(num) && num >= min && num <= max;
};

const ageValidator = validateRange(16, 99);
const expValidator = validateRange(0, 50);

class PersonalInfo {
    #age;
    constructor(name, age, phone) {
        this.name = name;
        this.phone = phone;
        this.age = age;
    }

    set age(value) {
        if (!ageValidator(value)) {
            throw new Error("Incorrent age (allowed 16-99)");
        }
        this.#age = Number(value);
    }

    get age() {
        return this.#age;
    }
}

class Resume extends PersonalInfo {
    constructor(name, age, phone, experience) {
        super(name, age, phone);
        if (!expValidator(experience)||experience>age-16) {
            throw new Error("Incorrent experience (allowed 0-50 and less than age-16)");
        }
        this.experience = Number(experience);
    }

    render() {
        const card = document.createElement('div');
        card.className = 'resumeCard';
        card.innerHTML = `
            <div class="photo">(Photo)</div>
            <h2>${this.name}</h2>
            <p><strong>Age:</strong> ${this.age}</p>
            <p><strong>Phone:</strong> ${this.phone}</p>
            <p><strong>Experience:</strong> ${this.experience} years</p>
        `;
        return card;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit');
    const output = document.querySelector('.resumeOutput');

    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const exp = document.getElementById('experience').value;

        try {
            const userResume = new Resume(name, age, phone, exp);
            output.innerHTML = '';
            output.appendChild(userResume.render());
        } catch (error) {
            alert(`Помилка: ${error.message}`);
            console.error(error);
        }
    });
});