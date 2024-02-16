interface RowList {
  title: string;
  currentCount: number;
  place: string;
  filePath: string;
}

export interface RowResponse {
  code: string;
  message: string;
  result: {
    lessonList: RowList[];
  };
}
