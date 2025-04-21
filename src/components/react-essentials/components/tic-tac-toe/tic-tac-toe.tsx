import tictagImage from './../../../../../public/images/tic-tack-image.jpg';
import Header from './header';
import { GameBoard, GameOver } from './components';
import { useReactContext } from '../../../../context/context';
export default function TicTacToe() {
  const { winner } = useReactContext();
  return (
    <div
      style={{
        backgroundImage: `url(${tictagImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '50vw'
      }}
      className=" w-full   justify-center items-center rounded-md p-32 flex flex-col relative"
    >
      <span className="text-white  w-full absolute top-0 text-center text-6xl italic font-semibold flex flex-col gap-2">
        React Tic-tac-toe
        <span className="text-2xl">{winner && `You Win :${winner}`}</span>
      </span>
      <div className="w-full h-full  shadow-md bg-purple-900 bg-opacity-10 backdrop backdrop-blur-lg rounded-xl flex flex-col items-center gap-3 relative">
        <Header />
        <GameBoard />
        <GameOver />
      </div>
    </div>
  );
}
