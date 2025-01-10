import { useEffect, useState } from 'react';
import { IPost } from '../../../models/IPost.ts';
import { getAllPost } from '../../../api/api.service.ts';
import { PostItemComponent } from '../post-item/PostItemComponent.tsx';

export const PostsListComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPost()
      .then((allPosts) => {
        setPosts(allPosts);
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Try again!');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="flex flex-col gap-5 justify-center my-5">
          {posts.map((post) => (
            <li key={post.id} className="border border-green-800 rounded-2xl p-4">
              <PostItemComponent post={post} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
