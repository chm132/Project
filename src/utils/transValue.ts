export const transValue = (arr: boolean[]): number[] => {
  return arr
    .map((value, index) => (value ? index + 1 : null)) // 값을 true이면 index + 1 반환, 아니면 null 반환
    .filter((value): value is number => value !== null); // null이 아닌 값을 걸러냄
};
