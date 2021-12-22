import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        width: wp('100%'),
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    }
})