/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        marginTop: '4%',
        alignItems: 'center',
    },
    search_area_container:{
        width: '90%',
        height: '45%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text_input:{
        width: '85%',
        borderRadius: 13,
        height: '100%',
        backgroundColor: '#E5E7EB',
    },
    buttons_container:{
        width: '90%',
        height: '35%',
        marginTop: '3.2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttons: {
        width: '30%',
        height: 25,
        backgroundColor: '#60A5FA',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttons_header: {
        color: 'white',
        fontWeight: 'bold'
    }
})