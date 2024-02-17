interface likeLessonList {
  lessonId: number;
  imgUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  leftDays: number;
}

export interface LikeResponse {
  code: string;
  message: string;
  result: likeLessonList[];
}
