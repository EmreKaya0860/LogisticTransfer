import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginPage.style';

import Title from './Components/TitleComponent/Title';
import OptionalLogin from './Components/OptionalLoginComponent/OptionalLogin';

export default function LoginPage(){

    return(
        <SafeAreaView style={styles.container}>
            <Title/>
            <View style={styles.body}>
                <View style={styles.inner_body}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput 
                        style={styles.text_input}
                        placeholder='Username'
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                        style={styles.text_input}
                        placeholder='Password'
                    />
                    <OptionalLogin text='Login with'/>
                    <View style={styles.footer}>
                        <View style={styles.footer_text}>
                            <Text style={{color:'black'}}>Not degistered yet?</Text>
                            <TouchableOpacity>
                                <Text style={styles.reminder_text}>Register now!</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.reminder_text}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
    );
}