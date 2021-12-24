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
    reminder_text: {
        color: '#7773F5',
        fontSize: 17,
        fontWeight: 'bold'
    },
    footer: {
        width: wp('100%'),
        backgroundColor: 'red',
        height: hp('23.2%'),
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})