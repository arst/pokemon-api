export default interface IPokemonDataApiResponseData {
  name: string;
  abilities: IPokemonAbilityData[];
  stats: IPokemonStatData[];
  moves: IPokemonMoveData[];
}

export interface IPokemonAbilityData {
  ability: IPokemonAbility;
}

export interface IPokemonAbility {
  name: string;
  url: string;
}

export interface IPokemonStatData {
  base_stat: number;
  stat: IPokemonStat;
}

export interface IPokemonStat {
  name: string;
  value: number;
}

export interface IPokemonMoveData {
  move: IPokemonMove;
}

export interface IPokemonMove {
  name: string;
  url: string;
}
