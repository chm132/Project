export const viewFormat = (views: number) => {
  if (views < 1000) {
    return views.toString();
  } else {
    // 조회수가 1000 이상일때
    // 3200 -> unit: 3, 39000 -> unit: 39
    const unit = Math.floor(views / 1000);
    if (unit < 10) {
      return `${unit}천`;
    } else {
      return `${unit / 10}만`;
    }
  }
};
