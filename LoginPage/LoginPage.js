import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
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
                    
                </View>
            </View>
        </SafeAreaView>
    );
}