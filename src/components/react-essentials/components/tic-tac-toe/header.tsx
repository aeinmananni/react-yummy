import { Player } from './components';
import { useReactContext } from '../../../../context/context';
export default function Header() {
  const { activePlayer } = useReactContext();
  return (
    <div className="w-full flex bg-purple-950 shadow-sm shadow-purple-400 h-11 gap-2">
      <Player
        symbol="O"
        playerName="PLAYER2"
        styles={{
          buttonClassName: 'bg-red-600',
          symbolClassName: 'text-shadow-red',
          inputClassName: 'shadow-inset-red'
        }}
        isActive={activePlayer === 'O'}
      />
      <Player
        symbol="X"
        playerName="PLAYER1"
        styles={{
          buttonClassName: 'bg-blue-600',
          symbolClassName: 'text-shadow-blue',
          inputClassName: 'shadow-inset-blue '
        }}
        isActive={activePlayer === 'X'}
      />
    </div>
  );
}
