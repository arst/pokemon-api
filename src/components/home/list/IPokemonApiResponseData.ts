import IPokemonApiResponsePokemonData from "./IPokemonApiResponsePokemonData";

export default interface IPokemonApiResponseData {
  count: number;
  next?: string;
  previous?: string;
  results: IPokemonApiResponsePokemonData[];
}
