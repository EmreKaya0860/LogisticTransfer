import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('29.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    left_container: {
        width: wp('50%'),
        height: hp('29.5'),
        marginLeft: 13,
        justifyContent: 'center'
    },
    text: {
        color: '#191849',
        fontWeight: 'bold',
        fontSize: 35
    }
})