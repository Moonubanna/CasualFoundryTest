import React from 'react';
import { render } from '@testing-library/react-native';
import PostList from './../home/components/PostList';
import { Post } from './../home/types';

const mockPosts: Post[] = [
    { id: 1, title: 'Post 1', body: 'This is the first post.', userId: 1 },
    { id: 2, title: 'Post 2', body: 'This is the second post.', userId: 2 },
];

const mockProps = {
    posts: mockPosts,
    loading: false,
    onLoadMore: jest.fn(),
    onPressPost: jest.fn(),
    error: null,
};

describe('PostList Component', () => {
    it('renders posts correctly', () => {
        const { getByText } = render(<PostList {...mockProps} />);
        expect(getByText('Post 1')).toBeTruthy();
        expect(getByText('Post 2')).toBeTruthy();
    });

    it('displays message when no posts are found', () => {
        const { getByText } = render(<PostList {...{ ...mockProps, posts: [] }} />);
        expect(getByText('No posts found!')).toBeTruthy();
    });
});