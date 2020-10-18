import React from "react";
import { Col, Row } from "reactstrap";
import useVisitedPokemon from "../../../hooks/useVisitedPokemon";
import PokemonRow from "../PokemonRow";
import PokemonShortInfo from "../PokemonShortInfo";

export default function HistoryList() {
  const { visitedPokemons, addVisitedPokemon } = useVisitedPokemon();
  var componentsCounter : number = 0;
  return (
    <Row>
      <Col size={12} sizes="sm">
        <Row>
          <Col size={12} sizes="sm">
            <h2>History</h2>
            {visitedPokemons.map((pokemon: PokemonShortInfo) => (
              <PokemonRow
                OnClick={() => addVisitedPokemon(pokemon)}
                Pokemon={pokemon}
                key={`${pokemon.Id}-` + componentsCounter++}
              />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
