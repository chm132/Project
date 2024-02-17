interface RowList {
  lessonId: number;
  title: string;
  currentCount: number;
  place: string;
  imageUrl: string;
}

export interface RowResponse {
  code: string;
  message: string;
  result: {
    lessonList: RowList[];
  };
}
