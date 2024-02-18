import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { useEffect, useState } from 'react';

dayjs.extend(relativeTime);
dayjs.locale('ko');

// dayjs를 활용하여 time을 파라미터로 넘겨주면 현재 시점에서의 차이를 한국말로 나타내게 하는 훅
export function fromNow(time: string | Date) {
  const currentTime = dayjs();
  const targetTime = dayjs(time);
  const timeDifference = currentTime.diff(targetTime, 'hour');

  if (timeDifference < 24) {
    // 24시간 이내의 경우 상대적인 시간으로 표시
    return targetTime.fromNow();
  } else {
    // 24시간을 넘어간 경우 YYYY.MM.DD 형식으로 표시
    return targetTime.format('YYYY.MM.DD');
  }
}

// dayjs를 활용하여 원하는 포매팅 형식대로 조리 가능
export function formatTime(
  time: string | Date | undefined,
  format = 'YYYY.MM.DD h:mm A',
) {
  return dayjs(time).format(format);
}

// dayjs 활용하여 원하는 시간 차이 계산
export function useTimeDifference(startTime: string, endTime: string) {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    if (startTime && endTime) {
      // startTime과 endTime을 dayjs 객체로 변환합니다.
      const startTimeObj = dayjs(startTime);
      const endTimeObj = dayjs(endTime);

      // endTime - startTime으로 시간 간격을 계산합니다.
      const duration = endTimeObj.diff(startTimeObj, 'hour');

      // 계산된 시간 간격을 상태로 설정합니다.
      setTimeDifference(duration);
    } else {
      // startTime 또는 endTime이 없는 경우 시간 간격을 null로 설정합니다.
      setTimeDifference(0);
    }
  }, [startTime, endTime]);

  return timeDifference;
}
