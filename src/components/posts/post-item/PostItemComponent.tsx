import { FC } from 'react';
import { IPost } from '../../../models/IPost.ts';

type PostItemProps = {
  post: IPost;
};

export const PostItemComponent: FC<PostItemProps> = ({ post }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-xl">{post.title}</p>
      <p>{post.body}</p>
      <div className="flex gap-10 text-green-600 font-bold">
        <p>Likes: {post.reactions.likes}</p>
        <p>Dislikes: {post.reactions.dislikes}</p>
        <p>Views: {post.views}</p>
      </div>
    </div>
  );
};
