interface TeacherList {
  name: string;
}

export interface DetailLessonResponse {
  code: string;
  message: string;
  result: {
    title: string;
    description: string;
    lessonType: string;
    supplies: string;
    price: number;
    refund: string;
    place: string;
    lessonStartDate: string;
    lessonEndDate: string;
    lectureWeekDay: string;
    lessonStartTime: string;
    lessonEndTime: string;
    approved: string;
    gatherStartDate: string;
    gatherEndDate: string;
    limitCount: number;
    currentCount: number;
    lessonTeacherList: TeacherList[];
  };
}
