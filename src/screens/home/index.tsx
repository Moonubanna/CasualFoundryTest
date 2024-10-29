import React, { useEffect, useState } from 'react';
import { useFetchPosts } from '../../hooks/useFetchPosts';
import { Post } from './types';
import { useAuth } from '../../hooks/useAuth';
import Home from './Home';
import { logAction } from '../../utils/logger';

const HomeContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { posts, fetchPosts, fetchSearchPosts, clearPosts, setAllPosts, loading, error, total, allPosts } = useFetchPosts();
  const { user, logout } = useAuth();
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    logAction('post-list-screen');
    fetchPosts(page);
  }, []);

  useEffect(() => {
    if (posts) {
      setIsLoadingMore(false);
    }
  }, [posts]);

  useEffect(() => {
    if (search === '') {
      setPage(1);
      fetchPosts(1);
      clearPosts();
    }
  }, [search]);

  const handleLoadMore = async () => {
    if (!loading && allPosts.length < total && !isLoadingMore) {
      setIsLoadingMore(true);
      const nextPage = page + 1;
      setPage(nextPage);
      fetchPosts(nextPage);
    }
  };

  const handleLogout = () => {
    logout();
    navigation.goBack();
  };

  const onSearchClear = () => {
    setAllPosts([]);
    setSearch('');
    setPage(1);
    fetchPosts(1);
  };

  const onSubmitEditing = () => {
    if (search.length > 3) {
      clearPosts();
      fetchSearchPosts(search);
    }
  };

  const onPressPost = (item: Post) => {
    logAction('post-click');
    navigation.navigate('PostDetails', { postId: item.id });
  };

  return (
    <Home
      user={user}
      search={search}
      onSearchChange={(text: string) =>setSearch(text)}
      onSearchClear={onSearchClear}
      onSubmitEditing={onSubmitEditing}
      onLogoutPress={handleLogout}
      allPosts={allPosts}
      loading={isLoadingMore}
      error={error}
      onLoadMore={handleLoadMore}
      onPressPost={onPressPost}
    />
  );
};

export default HomeContainer;