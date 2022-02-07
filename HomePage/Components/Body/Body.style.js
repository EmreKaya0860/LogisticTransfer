/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    body: {
        marginTop: hp('5%'),
        width: wp('90%'),
        height: hp('42%'),
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 5,
        marginLeft: wp('5%'),
    },
    user_info: {
        margin: wp('5%'),
        width: wp('45%'),
        height: hp('10%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    name_text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#191849',
        marginLeft: wp('5%')
    },
    inner_body: {
        width: wp('80%'),
        marginLeft: wp('4%')
    },
    information_box: {
        width: wp('80%'),
        height:hp('10%'),
        marginTop: hp('1%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    info_text: {
        fontWeight: 'bold',
        color: '#191849',
    },
    current_location: {
        height: hp('4.5%'),
        width: wp('18%'),
        alignItems: 'center',
    },
    delivery_information: {
        marginLeft: 20,
        width: wp('30%'),
        height: hp('10%'),
        alignItems: 'center',
    },
    delivery_location: {
        marginLeft: 22,
        width: wp('20%'),
        height: hp('4.5%'),
        alignItems: 'center',
    },
    buttons: {
        marginTop: 5,
        width: wp('80%'),
        height: hp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    details_button: {
        width: wp('35%'),
        height: hp('5%'),
        backgroundColor: '#60A5FA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    select_button: {
        width: wp('35%'),
        height: hp('5%'),
        backgroundColor: '#34D399',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    buttons_header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
})