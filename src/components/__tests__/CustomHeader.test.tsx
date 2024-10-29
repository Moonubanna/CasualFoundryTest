import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomHeader from './../CustomHeader';

describe('CustomHeader Component', () => {
  it('renders correctly with title and back button', () => {
    const mockOnBackPress = jest.fn();
    const { getByText } = render(
      <CustomHeader title="My Header" onBackPress={mockOnBackPress} showBackButton={true} />
    );
    expect(getByText('My Header')).toBeTruthy();
    expect(getByText('Back')).toBeTruthy();
    fireEvent.press(getByText('Back'));
    expect(mockOnBackPress).toHaveBeenCalled();
  });

  it('renders correctly with title and logout button', () => {
    const mockOnLogoutPress = jest.fn();
    const { getByText } = render(
      <CustomHeader title="My Header" onLogoutPress={mockOnLogoutPress} showLogoutButton={true} />
    );
    expect(getByText('My Header')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
    fireEvent.press(getByText('Logout'));
    expect(mockOnLogoutPress).toHaveBeenCalled();
  });

  it('renders title without buttons when none are shown', () => {
    const { getByText, queryByText } = render(
      <CustomHeader title="My Header" />
    );
    expect(getByText('My Header')).toBeTruthy();
    expect(queryByText('Back')).toBeNull();
    expect(queryByText('Logout')).toBeNull();
  });
});