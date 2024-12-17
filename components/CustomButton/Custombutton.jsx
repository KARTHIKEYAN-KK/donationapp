import { Text, Pressable } from 'react-native';
import React from 'react';
import { scaleFontSize } from '../../assets/styles/scaling';
import style from './style';

const Custombutton = ({
    bgColor = '#2979F2',
    width = 100, height = 50,
    bRadius = 10,
    fontWeight = 'Bold', fontColor = 'white',
    isDisabled = false, onPress = () => { }, title = 'Button', customStyle = {},
}) => {
    return (
        <Pressable style={[{
            backgroundColor: bgColor,
            width: scaleFontSize(width),
            height: scaleFontSize(height),
            borderRadius: scaleFontSize(bRadius),
            customStyle,
        }, style.buttonContainerEN, isDisabled && style.buttonContainerDIS]}
            disabled={isDisabled}
            onPress={() => onPress()}
            // onLongPress={() => {console.log('Long Pressed');}}
        >
            <Text style={{ fontFamily: `Poppins-${fontWeight}`, color: fontColor }}>{title}</Text>
        </Pressable>
    );
};

export default Custombutton;
