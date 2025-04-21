import { useReactContext } from '../../../../../../context/context';
import Button from '../../../../../../custom/button';

export default function GameOver() {
  const { winner, gameTurns, setGameTurns, setWinner } = useReactContext();

  const draw = gameTurns.length === 9 && !winner;
  return (
    <div
      className={`absolute top-0 left-0 bg-gray-800/80 w-full h-full rounded-lg flex flex-col items-center gap-4 duration-300  font-bold ${
        winner || draw ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
    >
      <h1 className="text-8xl text-white">Game Over!</h1>
      <p className={`text-5xl text-white text-shadow-yellow`}>
        {winner && winner + ' Won!'}
        {!winner && "It's a draw"}
      </p>
      <div className=" w-full h-full flex justify-center items-center">
        <Button
          onClick={() => {
            setGameTurns([]);
            setWinner('');
          }}
          className="bg-yellow-600 text-white w-1/4 p-2 rounded-md text-2xl hover:scale-105 duration-300 active:scale-95"
        >
          Rematch !
        </Button>
      </div>
    </div>
  );
}
