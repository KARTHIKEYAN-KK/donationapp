import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    donationContainer: {
        marginTop: verticalScale(10),
    },
    image: {
        width: horizontalScale(128),
        height: verticalScale(138),
        borderWidth: 1,
        borderRadius: scaleFontSize(10),
    },
    badgeContainer: {
        position: 'absolute',
        top: verticalScale(10),
        left: horizontalScale(10),
    },
    donationInforrmatioin: {
        marginTop: verticalScale(10),
        width: horizontalScale(128),
    },
    priceContainer: {
        marginTop: verticalScale(0),

    },
});

export default style;
