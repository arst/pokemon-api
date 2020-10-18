import { IPokemonEffectEntry } from "./IPokemonEffectEntry";

export default interface IPokemonApiMoveResponseData {
  name: string;
  effect_entries: IPokemonEffectEntry[];
}
