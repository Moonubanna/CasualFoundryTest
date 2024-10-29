import React from 'react';
import { render } from '@testing-library/react-native';
import PostDetails from './../post_details/PostDetails'; // Adjust the import based on your file structure

describe('PostDetails Component', () => {
  const mockOnBackPress = jest.fn();

  it('renders correctly with given props', () => {
    const { getByText } = render(
      <PostDetails
        title="Post Title"
        body="Post body content"
        username="user123"
        firstName="John"
        maidenName="Doe"
        lastName="Smith"
        email="john@example.com"
        phone="123-456-7890"
        gender="Male"
        birthDate="1990-01-01"
        loading={false}
        error={null}
        onBackPress={mockOnBackPress}
        postId="1"
      />
    );

    // Check for title and body content
    expect(getByText('Post Title')).toBeTruthy();
    expect(getByText('Post body content')).toBeTruthy();
    expect(getByText('USER INFO:')).toBeTruthy();
    expect(getByText('Username: user123')).toBeTruthy();
  });

  it('shows loading indicator when loading is true', () => {
    const { getByTestId } = render(
      <PostDetails
        title="Post Title"
        body="Post body content"
        username="user123"
        firstName="John"
        maidenName="Doe"
        lastName="Smith"
        email="john@example.com"
        phone="123-456-7890"
        gender="Male"
        birthDate="1990-01-01"
        loading={true}
        error={null}
        onBackPress={mockOnBackPress}
        postId="1"
      />
    );

    // Check if loading indicator is present
    expect(getByTestId('loadingIndicator')).toBeTruthy();
  });

  it('shows error message when error prop is provided', () => {
    const { getByText } = render(
      <PostDetails
        title="Post Title"
        body="Post body content"
        username="user123"
        firstName="John"
        maidenName="Doe"
        lastName="Smith"
        email="john@example.com"
        phone="123-456-7890"
        gender="Male"
        birthDate="1990-01-01"
        loading={false}
        error="An error occurred"
        onBackPress={mockOnBackPress}
        postId="1"
      />
    );

    expect(getByText('An error occurred')).toBeTruthy();
  });
});