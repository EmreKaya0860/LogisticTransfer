/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    deneme: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    header:{
        width: '100%',
        height: '10%',
        backgroundColor: 'red',
    },
    image_change_button: {
        flexDirection: 'row',
        width: '24.5%',
        justifyContent: 'space-between',
        marginBottom: '2%'
    },
    image_confirm_button: {
        backgroundColor: '#469FF9',
        width: '25%',
        height: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    image_confirm_button_text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    body: {
        width: '100%',
        height: '15%',
    },
    condition_confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancel_button:{
        width: '45%',
        height: '30%',
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#F87171',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancel_button_text:{
        fontWeight: 'bold',
        color: '#F87171',
        fontSize: 20
    },
    save_button: {
        width: '45%',
        height: hp('30%'),
        borderRadius: 15,
        backgroundColor: '#34D399',
        justifyContent: 'center',
        alignItems: 'center',
    },
    save_button_text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    footer_buttons: {
        width: '80%',
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'space-between',
    }
})