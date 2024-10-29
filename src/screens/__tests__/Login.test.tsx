import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './../login/Login';

describe('Login Component', () => {
  const mockOnUsernameChange = jest.fn();
  const mockOnPasswordChange = jest.fn();
  const mockOnLogin = jest.fn();

  it('renders and handles input correctly', () => {
    const { getByPlaceholderText } = render(
      <Login 
        username="" 
        password="" 
        onUsernameChange={mockOnUsernameChange} 
        onPasswordChange={mockOnPasswordChange} 
        onLogin={mockOnLogin} 
        loading={false} 
      />
    );
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'mypassword');

    expect(mockOnUsernameChange).toHaveBeenCalledWith('testuser');
    expect(mockOnPasswordChange).toHaveBeenCalledWith('mypassword');
  });
});