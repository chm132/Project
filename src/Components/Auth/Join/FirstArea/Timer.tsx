import { memo, useEffect, useState } from 'react';

export const Timer = memo(() => {
  const MINUTES_IN_MS = 2 * 60 * 1000; // 시간은 2분일때
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log('응답시간이 초과되었습니다');
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <div>
      {minutes} : {second}
    </div>
  );
});
