"use strict";

const loadbutton = document.getElementById("loadPokemon");

const card = document.getElementById("pokemonCard");
const pokeName = document.getElementById("pokeName");
const pokeImg = document.getElementById("pokeImg");
const pokeId = document.getElementById("pokeId");
const pokeType = document.getElementById("pokeType");
const pokeWeight = document.getElementById("pokeWeight");

function userrequest() {
    let request = prompt("Введіть ім'я покемона (наприклад: ditto, lucario, mewtwo):");
    if (request) {
        loadData(request.toLowerCase().trim());
    }
}

async function loadData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Покемона не знайдено");
        }
        
        const data = await response.json();
        renderPokemon(data);

    } catch (error) {
        alert("Помилка: " + error.message);
        card.style.display = "none";
    }
}

function renderPokemon(data) {
    pokeName.textContent = data.name;
    pokeImg.src = data.sprites.front_default;
    pokeId.textContent = data.id;

    const types = data.types.map(t => t.type.name).join(", ");
    pokeType.textContent = types;

    pokeWeight.textContent = data.weight / 10;

    card.style.display = "flex";
}

    loadbutton.addEventListener("click", userrequest);