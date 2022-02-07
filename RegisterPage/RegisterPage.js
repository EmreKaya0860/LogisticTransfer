/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './RegisterPage.style';

import Title from '../LoginPage/Components/TitleComponent/Title';
import OptionalLogin from '../LoginPage/Components/OptionalLoginComponent/OptionalLogin';

export default function RegisterPage(props) {

    function NavigateToHome(){
        props.navigation.navigate('HomePage');
    }
     
    function NavigateToLogin(){
        props.navigation.navigate('LoginPage');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Title text='Register'/>
            <View style={styles.body}>
                <View style={styles.inner_boddy}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput 
                    style={styles.text_input}
                    placeholder='Username'
                    />
                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                    style={styles.text_input}
                    placeholder='example@example.com'
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                    style={styles.text_input}
                    placeholder='Password'
                    />
                    <OptionalLogin text='Or register with'/>
                    <View style={styles.footer}>
                        <View style={styles.reminder_text_container}>
                            <TouchableOpacity onPress={NavigateToLogin}>
                                <Text style={styles.reminder_text}>Already have an account!</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.register_button} onPress={NavigateToHome}>
                            <Text style={styles.register_button_title}>Register</Text>
                        </TouchableOpacity>
                        <View style={styles.home_indicator_light_container}>
                            <View style={styles.home_indicator_light}></View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}