import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './RegisterPage.style';

import Title from '../LoginPage/Components/TitleComponent/Title';
import OptionalLogin from '../LoginPage/Components/OptionalLoginComponent/OptionalLogin';

export default function RegisterPage() {

    return(
        <SafeAreaView style={styles.container}>
            <Title />
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
                        <TouchableOpacity>
                            <Text style={styles.reminder_text}>Already have an account!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}