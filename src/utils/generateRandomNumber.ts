export const generateRandomNumber = () => {
  const randomNumber = Math.floor(100000 + Math.random() * 900000); // 100000부터 999999까지의 랜덤 숫자 생성
  return String(randomNumber);
};
