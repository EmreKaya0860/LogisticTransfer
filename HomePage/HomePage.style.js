import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        flex: 1,
        marginLeft: wp('5%'),
        
    },
    top_container: {
        width: wp('90%'),
        marginTop: hp('4%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon_container: {
        width: wp('26%'),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    body: {
        marginTop: hp('5%'),
        width: wp('90%'),
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 5,
        height: hp('42%'),
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
        color: 'black',
        marginLeft: wp('5%')
    },
    inner_body: {
        width: wp('80%'),
        marginLeft: wp('4%')

    }
})