import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../CustomButton';

describe('CustomButton Component', () => {
  it('renders with correct title and handles press', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={mockOnPress} />
    );
    expect(getByText('Press Me')).toBeTruthy();
    fireEvent.press(getByText('Press Me'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('shows loading indicator when loading is true', () => {
    const { getByTestId } = render(
      <CustomButton title="Loading" onPress={() => {}} loading={true} />
    );
    // Check if loading indicator is present
    expect(getByTestId('loadingIndicator')).toBeTruthy();
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <CustomButton title="Disabled" onPress={mockOnPress} disabled={true} />
    );
    fireEvent.press(getByText('Disabled'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});