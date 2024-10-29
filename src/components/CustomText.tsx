import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface CustomTextProps {
  title: string;
  style?: TextStyle;
  color?: string;
  size?: number;
  weight?: 'normal' | 'bold';
}

const CustomText: React.FC<CustomTextProps> = ({
  title = '',
  style = {},
  color = '#000',
  size = 14,
  weight = 'normal'
}) => {
  return (
    <Text style={[styles.text, { color, fontSize: size, fontWeight: weight }, style]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 10
  },
});

export default CustomText;