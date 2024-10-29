import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomTextInput from './../CustomTextInput';

describe('CustomTextInput Component', () => {
  it('renders correctly with placeholder and captures text input', () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomTextInput 
        placeholder="Enter text" 
        onChangeText={mockOnChangeText} 
        value="" 
      />
    );
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Hello World');
    expect(mockOnChangeText).toHaveBeenCalledWith('Hello World');
  });

  it('renders clear button and clears text on press', () => {
    const mockOnClear = jest.fn();
    const { getByText } = render(
      <CustomTextInput 
        placeholder="Enter text" 
        value="Some text" 
        onChangeText={() => {}} 
        onClear={mockOnClear} 
        clearButtonVisible={true} 
      />
    );
    expect(getByText('Clear')).toBeTruthy();
    fireEvent.press(getByText('Clear'));
    expect(mockOnClear).toHaveBeenCalled();
  });

  it('does not show clear button when clearButtonVisible is false', () => {
    const { queryByText } = render(
      <CustomTextInput 
        placeholder="Enter text" 
        value="Some text" 
        clearButtonVisible={false} 
      />
    );
    expect(queryByText('Clear')).toBeNull();
  });
});