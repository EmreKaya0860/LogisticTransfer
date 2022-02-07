/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    footer: {
        width: wp('90%'),
        height: hp('34.3%'),
        marginTop: hp('6%'),
        alignItems: 'flex-end',
        backgroundColor: 'white',
        elevation: 5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginLeft: wp('5%'),
        marginBottom: '30%'
    },
    head_image: {
        width: wp('90%'),
        height: hp('15%'),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    footer_user_info:{
        width: wp('85%'),
        height: hp('20%'),
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'absolute',
    },
    footer_name_text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#191849',
        marginLeft: wp('1%'),
        paddingBottom: '2.5%'
    },
    explain_text: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});