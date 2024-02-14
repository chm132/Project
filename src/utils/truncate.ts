// str에다가 넣고 싶은 string을 넣으면 n 초과시 ... 처리해주는 훅
export const truncate = (str: string, n: number) => {
  return str?.length > n ? str.substring(0, n) + '...' : str;
};
