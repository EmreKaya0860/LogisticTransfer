/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    top_container: {
        width: wp('90%'),
        marginTop: hp('4%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: wp('5%'),
    },
    icon_container: {
        width: wp('26%'),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});