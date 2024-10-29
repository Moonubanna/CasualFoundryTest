import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    style?: object;
    textColor?: string;
    buttonColor?: string;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    loading = false,
    style = {},
    textColor = '#FFFFFF',
    buttonColor = '#6200ee',
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor }, style]}
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
        >
            {loading ? (
                <ActivityIndicator size="small" color={textColor} testID='loadingIndicator' />
            ) : (
                <Text style={[styles.buttonText, { color: textColor }]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;