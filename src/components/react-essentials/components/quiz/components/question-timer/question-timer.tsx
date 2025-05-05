import { useEffect, useState } from 'react';

type QuestionTimer = {
  onTimer: () => void;
  timeout: number;
};

export default function QuestionTimer({ onTimer, timeout }: QuestionTimer) {
  const [remainingTime, setReminingTime] = useState<number>(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setReminingTime((prev) => {
        if (prev <= 100) {
          clearInterval(interval);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    const timeoutId = setTimeout(() => {
      onTimer();
    }, timeout);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [onTimer, timeout]);

  return (
    <progress max={timeout} value={remainingTime} className="w-full rounded-md progress progress-warning" />
  );
}
