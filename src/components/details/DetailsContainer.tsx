import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import PokemonExtendedInfo from "./PokemonExtendedInfo";
import IPokemonDataApiResponseData from "./api/IPokemonDataApiResponseData";
import IPokemonApiResponse from "../../common/api/IPokemonApiResponse";
import IPokemonApiAbilityResponseData from "./api/IPokemonApiAbilityResponseData";
import PokemonAbility from "./PokemonAbility";
import IPokemonApiMoveResponseData from "./api/IPokemonApiMoveResponseData";
import PokemonStat from "./PokemonStat";
import { Col, Container, Row } from "reactstrap";
import { pokemonApiBaseUrl, defaultLanguageCode } from "../../common/Constants";
import InfoCard from "./InfoCard";

export type TParams = { id: string };

export default function DetailsContainer({
  match,
}: RouteComponentProps<TParams>) {
  var pokemonId: number = Number.parseInt(match.params.id);

  let [pokemon, setPokemon] = useState<PokemonExtendedInfo | undefined>();

  useEffect(() => {
    var loadPokemonData = async () => {
      const pokemonData: IPokemonApiResponse<IPokemonDataApiResponseData> = await axios.get(pokemonApiBaseUrl + pokemonId);
      var abilities: Promise<
        IPokemonApiResponse<IPokemonApiAbilityResponseData>
      >[] = pokemonData.data.abilities
        .map((ability) => ability.ability.url)
        .map((abilityUrl) => axios.get(abilityUrl));
      var moves: Promise<
        IPokemonApiResponse<IPokemonApiMoveResponseData>
      >[] = pokemonData.data.moves
        .map((move) => move.move.url)
        .map((moveUrl) => axios.get(moveUrl));
      const abilitiesData: IPokemonApiResponse<
        IPokemonApiAbilityResponseData
      >[] = await Promise.all(abilities);
      const pokemonAbilities = abilitiesData.map(
        (abilityData) =>
          new PokemonAbility(
            abilityData.data.name,
            abilityData.data.effect_entries.filter(
              (arg) => arg.language.name === defaultLanguageCode
            )[0].effect
          )
      );
      var movesData = await Promise.all(moves);
      const pokemonMoves = movesData.map(
        (moveData) =>
          new PokemonAbility(
            moveData.data.name,
            moveData.data.effect_entries.filter(
              (arg) => arg.language.name === defaultLanguageCode
            )[0].effect
          )
      );
      const pokemonStats = pokemonData.data.stats.map(
        (statData) => new PokemonStat(statData.stat.name, statData.base_stat)
      );
      const pokemonExtendedInfo: PokemonExtendedInfo = new PokemonExtendedInfo(
        pokemonData.data.name,
        pokemonAbilities,
        pokemonStats,
        pokemonMoves
      );
      setPokemon(pokemonExtendedInfo);
    };

    loadPokemonData();
  }, [pokemonId]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>Details: {pokemon?.name}</h2>
          <Link to="/">Back</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <h3 className="detailstitle">Abilities</h3>
          {pokemon?.abilities.map((ability) => (
            <InfoCard title={ability.name} description={ability.description} />
          ))}
        </Col>
        <Col xs={4}>
          <h3 className="detailstitle">Stats</h3>
          {pokemon?.stats.map((stat) => (
            <span>
              <div className="float-left pokemonstattext">{stat.name}</div>
              <div className="float-right pokemonstattext">{stat.value}</div>
              <div className="clear"></div>
            </span>
          ))}
        </Col>
        <Col xs={4}>
          <h3 className="detailstitle">Moves</h3>
          {pokemon?.moves.map((move) => (
            <InfoCard title={move.name} description={move.description} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
