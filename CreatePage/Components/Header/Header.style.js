import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('22%'),
    },
    back_image: {
        alignItems: 'flex-end',
        position: 'absolute',
        width: wp('100%'),
        height: hp('22%'),
        justifyContent: 'flex-end',
        paddingRight: wp('8%'),
    },
    explain_text_container: {
        width: wp('90%'),
        height: hp('10%'),
        marginTop: hp('9.5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#191849',
        marginLeft: wp('3%')
    },
    explain_text:{
        fontWeight: 'bold'
    }
    
})