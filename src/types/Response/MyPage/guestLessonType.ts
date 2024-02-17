interface teacherList {
  name: string;
}

interface appList {
  title: string;
  lessonStartDate: string;
  lessonEndDate: string;
  lessonStartTime: string;
  lessonEndTime: string;
  lessonTeacherList: teacherList[];
  place: string;
  categoryId: number;
  createdAt: string;
  applicationStatus: string;
  imgUrl: string;
}

export interface GuestLessonResponse {
  code: string;
  message: string;
  result: {
    applicationList: appList[];
  };
}
