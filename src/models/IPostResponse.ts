import { IPost } from './IPost.ts';

export interface IPostResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}
