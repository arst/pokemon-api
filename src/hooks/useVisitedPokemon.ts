import { useState } from "react";
import PokemonShortInfo from "../components/home/PokemonShortInfo";

const visitedPokemonsKey: string = "visited_pokemons";
const loadInitialState = () => {
  const visitedPokemonsSerializedData = localStorage.getItem(
    visitedPokemonsKey
  );
  var initialState: PokemonShortInfo[] = [];

  if (visitedPokemonsSerializedData) {
    var visitedPokemonsDeserialized: any[] = JSON.parse(
      visitedPokemonsSerializedData
    );
    initialState = initialState.concat(
      visitedPokemonsDeserialized.map(
        (deserializedPokemonData) =>
          new PokemonShortInfo(
            deserializedPokemonData.name,
            deserializedPokemonData.url
          )
      )
    );
  }

  return initialState;
};

const useVisitedPokemon = () => {
  const [visitedPokemons, setVisitedPokemons] = useState(loadInitialState());

  return {
    visitedPokemons,
    addVisitedPokemon: (visitedPokemon: PokemonShortInfo) => {
      if (visitedPokemons.length === 5) {
        visitedPokemons.shift();
      }

      visitedPokemons.push(visitedPokemon);
      setVisitedPokemons(visitedPokemons);
      var serializedVisitedPokemons = JSON.stringify(
        visitedPokemons.map((pokemon) => ({
          name: pokemon.Name,
          url: pokemon.Url,
        }))
      );
      localStorage.setItem(visitedPokemonsKey, serializedVisitedPokemons);
    },
  };
};

export default useVisitedPokemon;
