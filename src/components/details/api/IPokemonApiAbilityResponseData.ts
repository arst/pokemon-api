import { IPokemonEffectEntry } from "./IPokemonEffectEntry";

export default interface IPokemonApiAbilityResponseData {
  name: string;
  effect_entries: IPokemonEffectEntry[];
}
