import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { fetchPosts as fetchPostsAction, fetchPostDetails as fetchPostDetailsAction,
  fetchSingleUser as fetchSingleUserAction, fetchSearchPosts as fetchSearchPostsAction,
  clearPosts as clearPostsAction, clearSearchPosts as clearSearchPostsAction,
 } from '../store/slices/postSlice';
import { useEffect, useState } from 'react';

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postDetails = useSelector((state: RootState) => state.posts.postDetails);
  const singleUser = useSelector((state: RootState) => state.posts.singleUser);
  const searchPosts = useSelector((state: RootState) => state.posts.searchPosts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);
  const total = useSelector((state: RootState) => state.posts.total);

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    if (posts.length !== 0) {
      setAllPosts([...allPosts, ...posts]);
    }
  }, [posts])

  useEffect(() =>{
    if (searchPosts.length !== 0) {
      setAllPosts([...searchPosts])
    } else {
      setAllPosts([]);
    }
  },[searchPosts])

  const fetchPosts = (page: number) => {
    dispatch(fetchPostsAction(page)); // Pass page number to the action
  };

  const fetchPostDetails = (postId: number) => {
    dispatch(fetchPostDetailsAction(postId));
  };

  const fetchSingleUser = (userId: number) => {
    dispatch(fetchSingleUserAction(userId));
  };

  const fetchSearchPosts = (search: number) => {
    dispatch(fetchSearchPostsAction(search));
  };

  const clearPosts = () => {
    dispatch(clearPostsAction());
    setAllPosts([]); // Clear local posts state as well
  };

  const clearSearchPosts = () => {
    dispatch(clearSearchPostsAction());
    setAllPosts([]); // Clear local search posts state as well
  };


  return {
    posts,
    postDetails,
    singleUser,
    loading,
    error,
    total,
    allPosts,
    searchPosts,
    fetchPosts,
    fetchPostDetails,
    fetchSingleUser,
    fetchSearchPosts,
    setAllPosts,
    clearPosts,
    clearSearchPosts
  };
};