interface teacherList {
  name: string;
}

interface appList {
  lessonId: number;
  title: string;
  lessonStartDate: string;
  lessonEndDate: string;
  lessonStartTime: string;
  lessonEndTime: string;
  lessonTeacherList: teacherList[];
  place: string;
  categoryName: string;
  createdAt: string;
  applicationStatus: string;
  imgUrl: string;
}

export interface MyPageLessonResponse {
  code: string;
  message: string;
  result: {
    applicationList: appList[];
  };
}
