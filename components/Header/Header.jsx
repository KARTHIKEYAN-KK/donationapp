import { View, Text } from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const Header = ({title = '', type = 1, ...props}) => {
    const styleToApply = () => {
        switch (type) {
            case 1:
                return style.title1;
            case 2:
                return style.title2;
            case 3:
                return style.title3;
        }
    };
    return (
        <View>
            <Text style={[styleToApply(), props.color && {color: props.color}]}>{title}</Text>
        </View>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    type: PropTypes.number,
};

export default Header;
