import React from 'react';
import { render } from '@testing-library/react-native';
import CustomText from './../CustomText';

describe('CustomText Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<CustomText title="Hello, World!" />);
    expect(getByText('Hello, World!')).toBeTruthy();
  });
});