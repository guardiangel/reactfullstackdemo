export interface PostsMode {
  id: number;
  title: string;
  postText: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentMode {
  id?: number;
  comments?: string;
  PostTabId?: number;
}
