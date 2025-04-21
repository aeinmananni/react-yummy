import Board from './board';
import { useReactContext } from '../../../../../../context/context';
import { WINING_COMBINATIONS } from '../../../../../../data';
type Player = 'X' | 'O' | null;
type GameBoard = Player[][];

const INITIAL_GAME_BOARD: GameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GamgeBoard() {
  const { handelSelectSqure, gameTurns, setWinner, playersName } = useReactContext();

  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { squre, player } = turn;
    const { row, col } = squre;
    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState<GameBoard>(INITIAL_GAME_BOARD);

  //   const handelSelectSqure = (rowIndex: number, colIndex: number) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //       updatedBoard[rowIndex][colIndex] = activePlayer;
  //       return updatedBoard;
  //     });

  //     handelSelectPlayer();
  //   };

  for (const combination of WINING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secoundSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secoundSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      setWinner(playersName[firstSquareSymbol]);
    }
  }

  return (
    <div className="w-3/4 h-full  flex justify-center items-center p-2">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-rows-3 w-full h-full">
          {row.map((col, colIndex) => (
            <Board
              key={colIndex}
              title={col}
              onClick={() => handelSelectSqure(rowIndex, colIndex)}
              disabled={col !== null}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
