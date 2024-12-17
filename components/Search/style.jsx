import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#F3F5F9',
        height: verticalScale(50),
        borderRadius: horizontalScale(15),
    },
    searchInput: {
        flex: 1,
        marginLeft: horizontalScale(6),
        height: '100%',
        fontFamily: 'Poppins-Regular',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(14),
        color: '#686C7A',
    },
});

export default style;
