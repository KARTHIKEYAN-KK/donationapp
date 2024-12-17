import { Text, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';
import style from './style';

const CustomTab = ({
    activeBgColor = '#2979F2',
    inActiveBgColor = '#2979F2', height = 50, widthPadding = 20,
    bRadius = 10,
    fontWeight = 'Bold', activeFontColor = 'white', inActiveFontColor = 'white',
    isActive = false, onPress = () => { }, title = 'Button', customStyle = {}, ...props
}) => {

    const [width, setWidht] = useState(props.width);
    const textRef = useRef(null);
    const tabWitdh = {
        width: horizontalScale(widthPadding * 2 + width),
    };

    return (
        <Pressable style={[{
            backgroundColor: isActive ? activeBgColor : inActiveBgColor,
            height: scaleFontSize(height),
            borderRadius: scaleFontSize(bRadius),
            customStyle,
        }, style.tabContainer, tabWitdh]}
            disabled={!isActive}
            onPress={() => onPress()}
        // onLongPress={() => {console.log('Long Pressed');}}
        >
            <Text
                onTextLayout={(event) => {
                    setWidht(event.nativeEvent.lines[0].width);
                }}
                ref={textRef} style={{ fontFamily: `Poppins-${fontWeight}`, color: isActive ? activeFontColor : inActiveFontColor }}>{title}</Text>
        </Pressable>
    );
};

export default CustomTab;
