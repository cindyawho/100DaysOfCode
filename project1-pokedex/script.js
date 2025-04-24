// using https://pokeapi.co/
// testing my getPokemon code

async function getPokemon(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  }

  // Example usage
  getPokemon("ditto");
