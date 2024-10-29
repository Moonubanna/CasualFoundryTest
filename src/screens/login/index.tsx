import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Login from './Login';
import { logAction } from '../../utils/logger';
import { storeData } from '../../utils/asyncStorage';
import { StorageKey } from '../../utils/constants';

const LoginContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState(''); //emilys
  const [password, setPassword] = useState(''); //emilyspass
  const { login, error, loading, user } = useAuth();

  useEffect(() => {
    if (!error && user) {
      logAction('user-successfully-login');
      try {
        storeData(StorageKey.LOGIN_STORAGE_KEY, JSON.stringify(user));
      } catch (error) {
        console.error('Failed to log action:', error);
      }
      navigation.navigate('Home');
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      logAction('user-failed-login');
      Alert.alert('Login failed:', `${error}`);
    }
  }, [error]);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Input Error', 'Please enter a username and password.');
      return;
    }
    await login(username, password);
  };

  return (
    <Login
      username={username}
      password={password}
      onUsernameChange={setUsername}
      onPasswordChange={setPassword}
      onLogin={handleLogin}
      loading={loading}
    />
  );
};

export default LoginContainer;