/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    user_info: {
        width: '60%',
        height: '12%',
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: '5%',
        alignItems: 'center',
    },
    name_text: {
        marginLeft: '15%',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#191849'
    },
    settings_container:{
        width: '90%',
        height: '10%',
        marginLeft: '5%',
        marginTop: '7%',
    },
    settings_text_container:{
        flexDirection: 'row',
        width: '35%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settings_text: {
        color: '#191849',
        fontWeight: 'bold',
        fontSize: 25,
    },
    search_container: {
        width: '100%',
        height: '40%',
        marginTop: '3%',
        borderRadius: 7,
        backgroundColor: '#E5E7EB',
    },
    checkbox_settings_container: {
        width: '100%',
        height: '51.5%',
        backgroundColor: 'white',
        marginTop: '8.5%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner_container: {
        width: '90%',
        height: '90%',
    },
    porfile_settings_header: {
        flexDirection: 'row',
        width: '60%',
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#469FF9',
        fontSize: 25,
        fontWeight: 'bold',
    }
})