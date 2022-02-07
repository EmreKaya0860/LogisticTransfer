/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    background_info: {
        backgroundColor: 'white',
        marginTop: '7%',
        marginBottom: '5%',
        width: '92%',
        height: '13%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '2%',
    },
    border:{
        borderRadius: 100,
        backgroundColor: 'blue',
        width: '25%',
        height: '90%',
        flexWrap: 'wrap',
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 100,
    },
    background_text:{
        width: '70%',
        height: '80%',
        marginLeft: '7%',
        justifyContent: 'space-between',
    },
    scroll: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        marginTop: '8%',
    }
})