import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    body: {
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute',
        justifyContent: 'flex-end'
    },
    inner_body:{
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
    optional_login_container: {
        width: wp('100%'),
        alignItems: 'center',
    },
    login_with_text: {
        color: 'black',
        fontWeight: 'bold'
    }
})