import PokemonAbility from "./PokemonAbility";
import PokemonMove from "./PokemonMove";
import PokemonStat from "./PokemonStat";

export default class PokemonExtendedInfo {
  constructor(
    readonly name: string,
    readonly abilities: PokemonAbility[],
    readonly stats: PokemonStat[],
    readonly moves: PokemonMove[]
  ) {}
}
