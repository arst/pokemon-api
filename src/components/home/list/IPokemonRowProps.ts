import PokemonShortInfo from "../PokemonShortInfo";

export default interface IPokemonRowProps {
  Pokemon: PokemonShortInfo;
  OnClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
