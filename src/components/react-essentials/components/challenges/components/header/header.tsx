import { useRef, useState } from 'react';
import Button from '../../../../../../custom/button';
import Input from '../../../../../../custom/input';

export default function Header() {
  const playerName = useRef<HTMLInputElement | null>(null);
  const [enterPlayerName, setInterPlayerName] = useState<string>('');

  const handelClick = () => {
    if (playerName.current) {
      setInterPlayerName(playerName.current.value);
      playerName.current.value = '';
    }
  };
  return (
    <div className="w-2/3 h-1/3 rounded-md bg-orange-800/50  backdrop-filter backdrop-blur-md flex flex-col items-center font-bold p-2 gap-7">
      <div className="flex flex-col gap-1 items-center">
        <div className="text-xl text-white font-pixel">
          THE <span className="text-yellow-950">ALMOST</span> FINAL COUNTDOWN
        </div>
        <span className="text-slate-200">Stop the timer once you extimate that time is (almost) Up</span>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <span className="text-xl bg-yellow-950 text-white p-1 rounded-md text-center">
          welcome {enterPlayerName ? enterPlayerName : 'unknown entity'}
        </span>
        <div className="w-max flex items-center justify-center ">
          <Input ref={playerName} className="!h-full p-1 border-2 border-yellow-950  bg-transparent" />
          <Button onClick={handelClick} className=" w-full bg-yellow-950 p-1  text-white">
            {'Set Name'}
          </Button>
        </div>
      </div>
    </div>
  );
}
