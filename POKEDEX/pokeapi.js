class Pokemon {
  constructor() {
    this.offset = "0";
    this.limit = "802";
  }

  async getPokemon(PokemonNameOrId) {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${PokemonNameOrId}`
    );
    const pokemonTextResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${PokemonNameOrId}`
    );

    const pokemon = await pokemonResponse.json();
    const text = await pokemonTextResponse.json();

    return {
      pokemon,
      text
    };
  }
  async getPokemonDegameRelations(url) {
    const pokemonTypeDemageRelation = await fetch(`${url}`);
    const damage = await pokemonTypeDemageRelation.json();
    return {
      damage
    };
  }
  async getPokemonEvolutionChain(pokemonEvolutionChaindUrl) {
    const getPokemonEvolutionChain = await fetch(`
    ${pokemonEvolutionChaindUrl}
    `);
    const evolutionChain = await getPokemonEvolutionChain.json();
    return {
      evolutionChain
    };
  }
  async getPokemonEvolutionStone(pokemonEvolutionStoneUrl) {
    const getPokemonEvolutionStone = await fetch(`
    ${pokemonEvolutionStoneUrl}`);
    const evolutionStone = await getPokemonEvolutionStone.json();
    return {
      evolutionStone
    };
  }
  async getPokemonMove(pokemonMoveUrl) {
    const getPokemonMove = await fetch(`${pokemonMoveUrl}`);
    const pokemonMove = await getPokemonMove.json();
    return {
      pokemonMove
    };
  }

  async getPokemonFullList() {
    const getPokemonList = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${this.limit}`
    );
    const pokemonList = await getPokemonList.json();
    return {
      pokemonList
    };
  }
  async getPokemonTypes(number) {
    const pokemonTypesResponse = await fetch(
      `https://pokeapi.co/api/v2/type/${number}`
    );

    const type = await pokemonTypesResponse.json();

    return {
      type
    };
  }
  async getPokemonPhoto(url) {
    const pokemonPhotoResponse = await fetch(`${url}`);
    const photo = await pokemonPhotoResponse.json();
    return {
      photo
    };
  }
  async getPokemonItem(id) {
    const pokemonItem = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
    const item = await pokemonItem.json();
    return {
      item
    };
  }
}
