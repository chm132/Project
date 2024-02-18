interface SubList {
  name: string;
  sub_categoryId: number;
}

export interface SubCategoryResponse {
  code: string;
  message: string;
  result: SubList[];
}
