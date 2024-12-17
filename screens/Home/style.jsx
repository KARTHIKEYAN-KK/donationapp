import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    headerContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextContainer: {
        flexDirection: 'column',
    },
    welcomeText: {
        color: '#636776',
        fontFamily: 'Poppins-Regular',
        fontSize: scaleFontSize(18),
    },
    avatarContainer: {
        width: scaleFontSize(68),
        height: scaleFontSize(68),
        backgroundColor: '#E5F8FF',
        borderRadius: scaleFontSize(68),
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImage: {
        width: scaleFontSize(40),
        height: scaleFontSize(40),
        resizeMode: 'contain',
    },
    notificationCountContainer: {
        width: scaleFontSize(20),
        height: scaleFontSize(20),
        borderRadius: scaleFontSize(18),
        backgroundColor: '#2979F2',
        position: 'absolute',
        left: scaleFontSize(45),
        bottom: scaleFontSize(53),
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationCountText: {
        color: 'white',
        fontSize: scaleFontSize(12),
        fontFamily: 'Poppins-SemiBold',
        padding: 1,
    },
    bannerImageContainer: {
        marginHorizontal: horizontalScale(20),
        height: verticalScale(120),
        borderRadius: scaleFontSize(20),
        overflow: 'hidden',
        marginVertical: verticalScale(10),
    },
    donationContainer: {
        // paddingHorizontal: horizontalScale(10),
        // borderWidth: 1,
        borderRadius: scaleFontSize(10),
        marginHorizontal: horizontalScale(20),
        backgroundColor: '#dbf1ff',
    },
});

export default style;
