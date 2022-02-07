/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

    navigation_container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'flex-end',
    },
    navigation: {
        width: '100%',
        height: '11.5%',
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    nav_icons_container: {
        width: '82%',
        height: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    home_indicator_light: {
        backgroundColor: 'black',
        width: wp('35%'),
        height: hp('0.7%'),
        borderRadius: 5,
       },
       home_indicator_light_container: {
         width: wp('100%'),
         height: hp('2%'),
         alignItems: 'center',
         justifyContent: 'flex-end',
         paddingBottom: 1,
       },
})
