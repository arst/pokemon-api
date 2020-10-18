import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import PokemonShortInfo from "../PokemonShortInfo";
import axios from "axios";
import IPokemonApiResponse from "../../../common/api/IPokemonApiResponse";
import IPokemonApiResponseData from "./IPokemonApiResponseData";
import useVisitedPokemon from "../../../hooks/useVisitedPokemon";
import PokemonRow from "../PokemonRow";
import { pokemonApiBaseUrl } from "../../../common/Constants";
import Pager from "./Pager";

export default function PokemonsList() {
  let [pokemons, setPokemons] = useState(new Array<PokemonShortInfo>());
  let [previousPageUrl, setPreviousPageUrl] = useState<string | undefined>("");
  let [nextPageUrl, setNextPageUrl] = useState<string | undefined>("");
  let [currentPageUrl, setCurrentPageUrl] = useState<string>(pokemonApiBaseUrl);
  const { addVisitedPokemon } = useVisitedPokemon();

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsData: IPokemonApiResponse<IPokemonApiResponseData> = await axios.get(
        currentPageUrl
      );
      setPreviousPageUrl(pokemonsData.data.previous);
      setNextPageUrl(pokemonsData.data.next);
      setPokemons(
        pokemonsData.data.results.map(
          (pokemon) => new PokemonShortInfo(pokemon.name, pokemon.url)
        )
      );
    };

    getPokemons();
  }, [currentPageUrl]);

  return (
    <Row>
      <Col size={12} sizes="sm">
        <Row>
          <Col size={12} sizes="sm">
            <h2>All Pokemons</h2>
          </Col>
        </Row>
        <Row>
          <Pager
            hasNext={!!nextPageUrl}
            hasPrevious={!!previousPageUrl}
            onNextClick={() => {
              if (nextPageUrl) setCurrentPageUrl(nextPageUrl);
            }}
            onPreviousClick={() => {
              if (previousPageUrl) setCurrentPageUrl(previousPageUrl);
            }}
          />
        </Row>
        <Row>
          <Col size={12} sizes="sm">
            {pokemons.map((pokemon) => (
              <PokemonRow
                Pokemon={pokemon}
                key={pokemon.Id}
                OnClick={() => {
                  addVisitedPokemon(pokemon);
                }}
              />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
