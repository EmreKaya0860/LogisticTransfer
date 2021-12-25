/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import styles from './HomePage.style';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Logo from './assets/Top_Logo.svg';
import Profile from './assets/PP.svg';

export default function HomePage(){

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.top_container}>
            <Logo/>
            <View style= {styles.icon_container}>
                <MaterialIcon name="lightning-bolt-outline" size={27} color="grey"/>
                <IonIcon name="notifications-outline" size={27} color="grey"/>
                <MaterialIcon name="dots-vertical" size={27} color="grey"/>
            </View>
           </View>
           <View style={styles.body}>
                <View style={styles.user_info}>
                    <Profile />
                    <Text style={styles.name_text}>John D.</Text>
                </View>
                <View style={styles.inner_body}>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                <View style={styles.information_box}>
                    <View style={styles.current_location}></View>
                </View>
                </View>
           </View>
        </SafeAreaView>
    );
}
