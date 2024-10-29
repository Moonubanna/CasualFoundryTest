import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomHeaderProps {
  title: string;
  onBackPress?: () => void;
  onLogoutPress?: () => void;
  showBackButton?: boolean;
  showLogoutButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  onBackPress,
  onLogoutPress,
  showBackButton = false,
  showLogoutButton = false,
}) => {
  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={[styles.title, {
        flex: 1,
        textAlign: showBackButton || showLogoutButton ? 'left' : 'center'
      }]}>{title}</Text>
      {showLogoutButton && (
        <TouchableOpacity onPress={onLogoutPress}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  backButton: {
    paddingRight: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#6200ee',
    padding: 10,
  },
});

export default CustomHeader;