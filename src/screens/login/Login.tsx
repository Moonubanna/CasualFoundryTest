import React from 'react';
import { View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader';

interface LoginProps {
  username: string;
  password: string;
  onUsernameChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onLogin: () => void;
  loading: boolean;
}

const Login: React.FC<LoginProps> = ({ username, password, onUsernameChange, onPasswordChange, onLogin, loading }) => {
  return (
    <View style={styles.container}>
      <CustomHeader title={'Login'} showBackButton={false} showLogoutButton={false} />
      <View style={styles.subContainer}>
        <CustomTextInput
          prefix={true}
          placeholder="Username"
          onChangeText={onUsernameChange}
          value={username}
          keyboardType="default"
          maxLength={100}
          editable={true}
        />
        <View style={styles.inputSpacing} />
        <CustomTextInput
          prefix={true}
          placeholder="Password"
          onChangeText={onPasswordChange}
          value={password}
          keyboardType="default"
          maxLength={100}
          editable={true}
          secureTextEntry
        />
        <View style={styles.inputSpacing} />
        <CustomButton
          title="Login"
          onPress={onLogin}
          loading={loading}
          textColor="#FFFFFF"
          buttonColor="#6200ee"
        />
      </View>
    </View>
  );
};

export default Login;