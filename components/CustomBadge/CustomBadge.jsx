import { Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';
import style from './style';

const CustomBadge = ({
    bgColor = '#2979F2',
    height = 30, widthPadding = 10,
    bRadius = 10, fontSize = 10,
    fontWeight = 'Bold', fontColor = 'white',
    title = 'Button', customStyle = {}, ...props
}) => {

    const [width, setWidht] = useState(props.width);
    const textRef = useRef(null);
    const badgeWidht = {
        width: horizontalScale(widthPadding * 2 + width),
    };

    return (
        <View style={[{
            backgroundColor: bgColor,
            height: scaleFontSize(height),
            borderRadius: scaleFontSize(bRadius),
            customStyle,
        }, style.badgeContainer, badgeWidht]}
        >
            <Text
                onTextLayout={(event) => {
                    setWidht(event.nativeEvent.lines[0].width);
                }}
                ref={textRef} style={{ fontFamily: `Poppins-${fontWeight}`, color: fontColor, fontSize: scaleFontSize(fontSize) }}>{title}</Text>
        </View>
    );
};

export default CustomBadge;
