import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../store/rootReducer';
import { useFetchPosts } from '../../hooks/useFetchPosts';
import PostDetails from './PostDetails';
import { logAction } from '../../utils/logger';

const PostDetailsContainer: React.FC<{ route: any }> = ({ route }) => {
  const { postId } = route.params;
  const { fetchPostDetails, fetchSingleUser, singleUser, loading, error } = useFetchPosts();
  const postDetails = useSelector((state: RootState) => state.posts.postDetails);
  const navigation = useNavigation();

  const {
    title = '',
    body = '',
    userId = ''
  } = postDetails || {};

  const {
    firstName = '',
    maidenName = '',
    lastName = '',
    email = '',
    phone = '',
    username = '',
    gender = '',
    birthDate = ''
  } = singleUser || {};

  useEffect(() => {
    logAction('post-detail-screen');
  }, []);

  useEffect(() => {
    if (postId) fetchPostDetails(postId);
    if (userId) fetchSingleUser(userId);
  }, [postId, userId]);

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <PostDetails
      title={title}
      body={body}
      username={username}
      firstName={firstName}
      maidenName={maidenName}
      lastName={lastName}
      email={email}
      phone={phone}
      gender={gender}
      birthDate={birthDate}
      loading={loading}
      error={error}
      onBackPress={onBackPress}
      postId={postId}
    />
  );
};

export default PostDetailsContainer;