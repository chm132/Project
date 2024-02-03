interface CommentList {
  id: number;
  content: string;
  likeCounts: number;
  memberName: string;
  createdAt: string;
}

export interface DetailCommunityResponse {
  code: string;
  message: string;
  result: {
    title: string;
    body: string;
    category: string;
    views: number;
    commentCounts: number;
    memberName: string;
    createdAt: string;
    communityCommentList: CommentList[];
  };
}
