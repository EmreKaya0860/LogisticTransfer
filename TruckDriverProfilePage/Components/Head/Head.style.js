/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '35%',
        marginTop: '10%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: 'white',
        elevation: 5,
    },
    profile_top: {
        width: '100%',
        height: '28%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name_text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#191849'
    },
    verified_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    follow_button: {
        width: '20%',
        height: '50%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
    },
    follow_button_title: {
        color: '#5550F2',
        fontWeight: 'bold',
    },
    profile_stats: {
        width: '100%',
        height: '25%',
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    follower_container: {
        width: '19%',
        height: '85%',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    following_delivery_style: {
        width: '19%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile_info: {
        width: '100%',
        height: '17%',
        marginTop: '3%'
    },
    profile_info_text: {
        color: '#191849',
        fontWeight: 'bold',
    },
    profile_nav: {
        flexDirection: 'row',
        width: '100%',
        height: '17%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    }
})