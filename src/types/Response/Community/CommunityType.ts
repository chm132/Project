interface CommunityList {
  id: number;
  title: string;
  body: string;
  category: string;
  views: number;
  commentCounts: number;
}

export interface CommunityResponse {
  code: string;
  message: string;
  result: {
    communityList: CommunityList[];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
