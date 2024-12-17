import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    title1: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: scaleFontSize(30),
        color: '#022150',
        lineHeight: scaleFontSize(40),
    },
    title2: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: scaleFontSize(24),
        color: '#022150',
        lineHeight: scaleFontSize(34),
    },
    title3: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: scaleFontSize(22),
        color: '#022150',
        lineHeight: scaleFontSize(32),
    },
});

export default style;
