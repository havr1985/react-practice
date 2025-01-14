import { useEffect, useState } from 'react';
import { IPost } from '../../../models/IPost.ts';
import { getAllPost } from '../../../api/api.service.ts';
import { PostItemComponent } from '../post-item/PostItemComponent.tsx';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../pagination/Pagination.tsx';

export const PostsListComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);

  const postPerPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    setIsLoading(true);
    getAllPost(currentPage, postPerPage)
      .then(({ posts, total }) => {
        setPosts(posts);
        setTotalPage(Math.ceil(total / postPerPage));
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Try again!');
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul className="flex flex-col gap-5 justify-center my-5">
            {posts.map((post) => (
              <li key={post.id} className="border border-green-800 rounded-2xl p-4">
                <PostItemComponent post={post} />
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};
