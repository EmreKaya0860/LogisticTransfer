/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: '9%',
    },
    profile_information_container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '22%',
    },
    verified_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name_text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#191849'
    },
    navigation_buttons_container: {
        height: '60%',
        justifyContent: 'space-between',
        marginTop: '14.5%',
    },
    button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttons_title: {
        color: 'black',
        fontSize: 25,
        marginRight: '7%',
    },
    exit_button: {
        color: 'red',
        fontSize: 25,
        marginRight: '7%',
    },
})