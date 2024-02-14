interface NewsList {
  id: number;
  createdAt: string;
  category: string;
  title: string;
  content: string;
  author: string;
  filePath: string;
}

export interface NewsResponse {
  code: string;
  message: string;
  result: {
    newsList: NewsList[];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}