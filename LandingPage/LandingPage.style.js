/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  background_image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  body_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  upper: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_container:{
    width: wp('100%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('14%'),
  },
  text_container: {
    width: wp('70%'),
    height: hp('10%'),
   },
   text: {
     color: 'white',
     fontSize: 22,
   },
   footer: {
    width: wp('100%'),
    height: hp('24%'),
    alignItems: 'center',
   },
   login_button: {
     width: wp('90%'),
     height: hp('6%'),
     backgroundColor: '#5550F2',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 15,
     paddingBottom: 5,
   },
   login_button_title: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 25,
   },
   register_button: {
    width: wp('90%'),
    height: hp('6%'),
    borderWidth: 3,
    borderColor: '#5550F2',
    borderRadius: 15,
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
   },
   home_indicator_light: {
    backgroundColor: 'white',
    width: wp('35%'),
    height: hp('0.7%'),
    borderRadius: 5,
   },
   home_indicator_light_container: {
     width: wp('100%'),
     height: hp('6.6%'),
     alignItems: 'center',
     justifyContent: 'flex-end',
     paddingBottom: 7,
   },
});
