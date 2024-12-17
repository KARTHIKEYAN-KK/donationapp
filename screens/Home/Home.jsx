import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles';
import Header from '../../components/Header/Header';
import style from './style';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import donationItems from '../../sample-data';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets/styles/scaling';


const Home = () => {
    return (
        <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.headerContainer}>
                    <View style={style.headerTextContainer}>
                        <Text style={style.welcomeText}>Hello,</Text>
                        <Header title={'Azzahri A.👋'} type={1} />
                    </View>
                    <TouchableOpacity>
                        <View style={style.avatarContainer}>
                            <Image source={require('../../assets/images/robo_avtr.png')} style={style.avatarImage} />
                        </View>
                        <View style={style.notificationCountContainer}>
                            <Text style={style.notificationCountText}>9+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.bannerImageContainer}>
                    <Image resizeMode="cover" style={{ width: '100%', height: verticalScale(120)}} source={require('../../assets/images/bannee_01.png')} />
                </View>
                <View style={style.donationContainer}>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={donationItems}
                        renderItem={({ item }) => (
                            <SingleDonationItem key={item.id}
                                donationTitle={item.title}
                                uri={item.image}
                                price={item.price}
                                badgeTitle={item.badge}
                                containerHrMargin={8}
                            />

                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;


//02227566067-02227579841