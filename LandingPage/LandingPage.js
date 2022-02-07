/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './LandingPage.style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Title from './assets/Title.svg';

export default function LandingPage(props){

  function NavigateToLogin(){
    props.navigation.navigate('LoginPage');
  }

  function NavigateToRegister(){
    props.navigation.navigate('RegisterPage');
  }

  return (
    <SafeAreaView style={styles.background}>
      <Image source={require('./assets/Landing.png')} style={styles.background_image}/>
      <View style={styles.body_container}>
        <View style={styles.upper}>
          <View style={styles.title_container}>
            <Title width={wp('95%')} height={hp('7.6%')}/>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text}>Lets transfer your package in a comfortable and easy way!</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.login_button} onPress={NavigateToLogin}>
            <Text style={styles.login_button_title}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.register_button} onPress={NavigateToRegister}>
            <Text style={styles.login_button_title}>Register</Text>
          </TouchableOpacity>
          <View style={styles.home_indicator_light_container}>
            <View style={styles.home_indicator_light}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
