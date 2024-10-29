import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from './../home/Home';

const mockProps = {
  user: { username: 'testUser' },
  search: '',
  onSearchChange: jest.fn(),
  onSearchClear: jest.fn(),
  onSubmitEditing: jest.fn(),
  onLogoutPress: jest.fn(),
  allPosts: [{ id: 1, title: 'Test Post', body: 'Test body' }],
  loading: false,
  error: null,
  onLoadMore: jest.fn(),
  onPressPost: jest.fn(),
};

describe('Home Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Home {...mockProps} />);
    expect(getByText('Welcome, testUser!')).toBeTruthy();
    expect(getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('calls onSearchChange on text input change', () => {
    const { getByPlaceholderText } = render(<Home {...mockProps} />);
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'test search');
    expect(mockProps.onSearchChange).toHaveBeenCalledWith('test search');
  });

  it('calls onLogoutPress when logout button is clicked', () => {
    const { getByText } = render(<Home {...mockProps} />);
    const logoutButton = getByText('Logout');
    fireEvent.press(logoutButton);
    expect(mockProps.onLogoutPress).toHaveBeenCalled();
  });

  it('calls onSearchClear when clear button is pressed', () => {
    const { getByText, getByPlaceholderText } = render(<Home {...mockProps} />);
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'test search');
    const clearButton = getByText('Clear');
    fireEvent.press(clearButton);
    expect(mockProps.onSearchClear).toHaveBeenCalled();
  });
});
