import React from 'react';
import { View } from 'react-native';
import { Post } from './types';
import CustomHeader from '../../components/CustomHeader';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import PostList from './components/PostList';

interface HomeComponentProps {
  user: any;
  search: string;
  onSearchChange: (text: string) => void;
  onSearchClear: () => void;
  onSubmitEditing: () => void;
  onLogoutPress: () => void;
  allPosts: Post[];
  loading: boolean;
  error: string | null;
  onLoadMore: () => void;
  onPressPost: (item: Post) => void;
}

const Home: React.FC<HomeComponentProps> = ({
  user,
  search,
  onSearchChange,
  onSearchClear,
  onSubmitEditing,
  onLogoutPress,
  allPosts,
  loading,
  error,
  onLoadMore,
  onPressPost,
}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title={`Welcome, ${user?.username || ''}!`}
        onLogoutPress={onLogoutPress}
        showBackButton={false}
        showLogoutButton={true}
      />
      <CustomTextInput
        prefix={true}
        placeholder="Search..."
        onChangeText={onSearchChange}
        onClear={onSearchClear}
        onSubmitEditing={onSubmitEditing}
        value={search}
        keyboardType={'default'}
        returnKeyType={'done'}
        maxLength={50}
        marginHorizontal={10}
        editable={true}
        clearButtonVisible={true}
      />
      <View style={styles.subContainer}>
        <PostList
          posts={allPosts}
          loading={loading}
          onLoadMore={onLoadMore}
          onPressPost={onPressPost}
          error={error}
        />
      </View>
    </View>
  );
};

export default Home;