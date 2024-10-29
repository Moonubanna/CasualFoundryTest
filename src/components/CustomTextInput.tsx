import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import CustomText from './CustomText';

interface CustomTextInputProps {
    prefix?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad' | 'url' | 'number-pad';
    returnKeyType?: 'done' | 'next' | 'return'; 
    maxLength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    editable?: boolean;
    style?: object;
    marginHorizontal?: number;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    onClear?: () => void;
    value?: string;
    clearButtonVisible?: boolean;
    onSubmitEditing?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    prefix = false,
    keyboardType,
    returnKeyType,
    maxLength,
    multiline = false,
    numberOfLines = 1,
    editable = true,
    style,
    marginHorizontal = 0,
    placeholder,
    onChangeText,
    onClear,
    onSubmitEditing,
    value,
    clearButtonVisible,
    ...rest
}) => {
    return (
        <View style={[styles.container, { marginHorizontal }]}>
            <View style={styles.input}>
                <TextInput
                    {...rest}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    maxLength={maxLength}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    editable={editable}
                    style={styles.textInputStyle}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    value={value}
                />
            </View>
            {clearButtonVisible && onClear && (
                <TouchableOpacity onPress={onClear} style={styles.clearButton} accessible accessibilityLabel="Clear input">
                    <CustomText title={'Clear'} style={styles.clearButtonText} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    clearButton: {
        paddingHorizontal: 10,
    },
    clearButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInputStyle: {
        width: '100%',
        height: 55,
        paddingHorizontal: 10,
    },
});

export default CustomTextInput;