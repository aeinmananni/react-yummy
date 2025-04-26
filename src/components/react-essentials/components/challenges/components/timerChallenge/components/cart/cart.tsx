import { useState, useRef } from 'react';
import Button from '../../../../../../../../custom/button';

export type TimerStateType = {
  timerExpired: boolean;
  timerStarted: boolean;
};

type CartProps = {
  title: string;
  targetTime: number;
};

export default function Cart({ title, targetTime }: CartProps) {
  const [timerStates, setTimerStates] = useState<TimerStateType>({
    timerExpired: false,
    timerStarted: false
  });

  const timer = useRef<number | null>(null);

  const handelStart = () => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        setTimerStates((prev) => ({ ...prev, timerExpired: true }));
      }, targetTime * 1000);
      setTimerStates((prev) => ({ ...prev, timerStarted: true }));
    }
  };

  const handelStop = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      setTimerStates((prev) => ({
        ...prev,
        timerStarted: false,
        timerExpired: false,
        showModal: true
      }));
    }
  };
  // const handleReset = () => {
  //   setTimerStates({
  //     timerExpired: false,
  //     timerStarted: false
  //   });
  //   timer.current = null;
  // };

  return (
    <>
      <section className="w-1/2 flex flex-col gap-6 bg-yellow-950 bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-md py-2 shadow-lg items-center h-max px-1 relative">
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-yellow-500  font-semibold text-2xl">{title}</h2>
          <p className="border-b p-1 border-yellow-500 text-lg font-light">
            {targetTime} secound{targetTime > 1 ? 's' : ''}
          </p>
          {timerStates.timerExpired && (
            <div className="absolute bg-red-500 p-1 top-2 left-2 text-white">You Lost</div>
          )}
        </div>
        <Button
          type="button"
          onClick={timerStates.timerStarted ? handelStop : handelStart}
          className="bg-orange-800/50 w-1/2 p-1 rounded-md text-white"
        >
          {timerStates.timerStarted ? 'Stop' : 'Start'} Challenge
        </Button>
        <p className={` text-yellow-500 w-max  ${timerStates.timerStarted && 'animate-pulse'}`}>
          {timerStates.timerStarted ? 'Timer is running...' : 'timer inactive'}
        </p>
      </section>
    </>
  );
}
