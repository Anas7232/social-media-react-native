import { View, Text, Pressable, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';
import React from 'react';
import { them } from '@/constants/theme';
import { hp } from '@/helpers/common';

type ButtonProps = {
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    title?: string;
    onPress?: (event: GestureResponderEvent) => void;
    loading?: boolean;
    hasShadow?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => { },
    loading = false,
    hasShadow = true
}) => {
    const shadowStyle = {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    };

    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{loading ? 'Loading...' : title}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: them.colors.primary,
        height: hp(6.6),
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: them.radius.xl,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: hp(2.5),
        fontWeight: '600',
    },
});
