interface LessonList {
  lessonId: number;
  title: string;
  gatherStartDate: string;
  gatherEndDate: string;
  gatherStatus: boolean;
  lessonStartDate: string;
  lessonEndDate: string;
  lectureWeekDay: string;
  lessonStartTime: string;
  lessonEndTime: string;
  price: number;
  place: string;
  limitCount: number;
  currentCount: number;
  file: string;
}

export interface HeaderSearchResponse {
  code: string;
  message: string;
  result: {
    lessonList: LessonList[];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
