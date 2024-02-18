export const transKrCategoryId = (categoryId: number) => {
  switch (categoryId) {
    case 1:
      return '스마트폰';
    case 2:
      return '컴퓨터';

    default:
      return '';
  }
};
