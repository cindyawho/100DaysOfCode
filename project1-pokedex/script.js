// using https://pokeapi.co/
// testing my getPokemon code

let spriteFront = true;

async function getPokemon(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        // console.log(data);
        updatePokedex(data);
        spriteFront = true;
        currCardData = data;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
    }
}

// Example usage
getPokemon("eevee");

function updatePokedex(data){
    // Name
    const name = document.getElementById("pokemon-Name");
    name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1); // capitalize
    // console.log("This is the name I got: ", data.name);

    // Species
    const species = document.getElementById("pokemon-Species");
    const capitalize = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);
    species.innerHTML = "Species: " + capitalize;

    // Height and Weight
    const height = document.getElementById("pokemon-Height");
    height.innerHTML = "Height: " + data.height;
    const weight = document.getElementById("pokemon-Weight");
    weight.innerHTML = "Weight: " + data.weight;

    // Stats
    const hp = document.getElementById("pokemon-HP");
    hp.innerHTML = "HP: " + data.stats[0].base_stat;
    const attack = document.getElementById("pokemon-Attack");
    attack.innerHTML = "Attack: " + data.stats[1].base_stat;
    const defense = document.getElementById("pokemon-Defense");
    defense.innerHTML = "Defense: " + data.stats[2].base_stat;
    const spAttack = document.getElementById("pokemon-SpAttack");
    spAttack.innerHTML = "Special Attack: " + data.stats[3].base_stat;
    const spDefense = document.getElementById("pokemon-SpDefense");
    spDefense.innerHTML = "Special Defense: " + data.stats[4].base_stat;
    const speed = document.getElementById("pokemon-Speed");
    speed.innerHTML = "Speed: " + data.stats[5].base_stat;

    // card general
    const idP = document.getElementById("pokemon-ID");
    idP.innerHTML = "ID: " + data.id;

    // Abilities
    // console.log(data.abilities);
    const container = document.getElementById("abilitiesContainer");
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'pokemon-Abilities');
    container.appendChild(ul);

    let abilities = data.abilities;
    abilities.forEach(renderAbility);

    function renderAbility(element, i, arr){
        var li = document.createElement('li');
        li.setAttribute('class','ability');
        li.innerHTML = element.ability.name;
        ul.appendChild(li);
    }

    const image = document.getElementById("pokemon-Sprite");
    image.src = data.sprites.front_default;
    image.addEventListener("click", () => 
        flipSprite(currCardData)
    );

}


// IDEA: when image is clicked, switch to back of pokemon
function flipSprite(data){
    const image = document.getElementById("pokemon-Sprite");
    if(spriteFront) {
        image.src = data.sprites.back_default;
    } else {
        image.src = data.sprites.front_default;
    }    
    spriteFront = !spriteFront;
}