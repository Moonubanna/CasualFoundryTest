import React from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity, Text, Image } from 'react-native';
import { Post } from './../types';
import styles from './../styles';
import { IMAGE_BASE_URL } from '../../../networking/endpoints';
import { logAction } from '../../../utils/logger';

interface PostListProps {
    posts: Post[];
    loading: boolean;
    onLoadMore: () => void;
    onPressPost: (item: Post) => void;
    error: string | null;
}

const PostList: React.FC<PostListProps> = ({ posts, loading, onLoadMore, onPressPost, error }) => {
    const renderItem = ({ item }: { item: Post }) => (
        <TouchableOpacity onPress={() => {
            logAction('post-click');
            onPressPost(item);
        }} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.body}>{item.body}</Text>
            <Text style={styles.postByUser}>Posted by User {item.userId}</Text>
            <Image
                source={{ uri: `${IMAGE_BASE_URL}${item.id}/200/150` }}
                style={styles.image}
                resizeMode="stretch"
            />
        </TouchableOpacity>
    );

    if (error) {
        return <Text style={{ color: 'red' }}>{error}</Text>;
    }

    if (posts.length === 0) {
        return <Text>No posts found!</Text>;
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        />
    );
};

export default PostList;