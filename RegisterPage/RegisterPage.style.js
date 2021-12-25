/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container:{
        width: wp('100%'),
        height: hp('100%')
    },
    body:{
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute',
        justifyContent: 'flex-end'
    },
    inner_boddy: {
        width: wp('100%'),
        height: hp('73%'),
        marginLeft: 13,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#191849'
    },
    text_input: {
        height: 50,
        width: wp('92%'),
        backgroundColor:'#EEEEFE',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 20,
    },
    reminder_text_container: {
        width: wp('100%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    reminder_text: {
        color: '#7773F5',
        fontSize: 17,
        fontWeight: 'bold'
    },
    footer: {
        width: wp('100%'),
        height: hp('23.2%'),
        justifyContent: 'flex-end'
    },
    register_button: {
        width: wp('92%'),
        height: hp('6%'),
        backgroundColor: '#5550F2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingBottom: 5,
      },
      register_button_title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
      },
      home_indicator_light: {
        backgroundColor: 'black',
        width: wp('35%'),
        height: hp('0.7%'),
        borderRadius: 5,
       },
       home_indicator_light_container: {
         width: wp('100%'),
         height: hp('5%'),
         alignItems: 'center',
         justifyContent: 'flex-end',
         paddingBottom: 7,
       },

});
