import { View, Image } from 'react-native';
import React from 'react';
import CustomBadge from '../CustomBadge/CustomBadge';
import style from './style';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { horizontalScale } from '../../assets/styles/scaling';

const SingleDonationItem = (props) => {
  return (
    <View style={[style.donationContainer, props.containerHrMargin && {marginHorizontal: horizontalScale(props.containerHrMargin)}]}>
      <View>
        <Image source={{ uri: props.uri }} style={style.image} resizeMode="contain" />
        <View style={style.badgeContainer}>
          <CustomBadge title={props.badgeTitle} bgColor={'#145855'} bRadius={100} />
        </View>
      </View>
      <View style={style.donationInforrmatioin}>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <View style={style.priceContainer}>
          <Header title={'₹' + props.price.toFixed(2)} type={3} color={'#156CF7'}/>
        </View>
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
