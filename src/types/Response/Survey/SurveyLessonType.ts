export interface ResultList {
  currentCount: 1;
  endDate: string;
  endTime: string;
  gatherEndDate: string;
  gatherStartDate: string;
  imgUrl: string;
  lessonId: number;
  limitCount: number;
  place: string;
  price: number;
  startDate: string;
  startTime: string;
  title: string;
  weekDay: string;
}

export interface SurveyResultResponse {
  code: string;
  message: string;
  result: ResultList[];
}
