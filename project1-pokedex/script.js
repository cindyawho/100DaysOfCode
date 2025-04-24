// using https://pokeapi.co/
// testing my getPokemon code

async function getPokemon(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        console.log(data);
        updatePokedex(data);
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
        const abilities = document.getElementById("pokemon-Abilities");

    }