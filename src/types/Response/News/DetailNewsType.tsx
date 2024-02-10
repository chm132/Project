interface FileList {
  filePath: string;
}

export interface DetailNewsResponse {
  code: string;
  message: string;
  result: {
    title: string;
    content: string;
    category: string;
    author: string;
    createdAt: string;
    fileList: FileList[];
    views: number;
  };
}
