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
        const name = document.getElementById("pokemon-Name");
        name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1); // capitalize
        console.log("This is the name I got: ", data.name);
    }