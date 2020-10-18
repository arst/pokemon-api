export default interface IPagerProps {
    hasPrevious: boolean,
    hasNext: boolean,
    onPreviousClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onNextClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}