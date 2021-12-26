/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import styles from './HomePage.style';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Logo from './assets/Top_Logo.svg';
import Profile from './assets/PP.svg';
import Arrow from './assets/Arrow.svg';

import Home from './assets/Icons/Home.svg';
import Create from './assets/Icons/Create.svg';
import Search from './assets/Icons/Search.svg';
import NavProfile from './assets/Icons/Profile.svg';

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
                    <View style={styles.current_location}>
                        <Text style={styles.info_text}>From</Text>
                        <Text style={{color:'black'}}>Ankara, TR</Text>
                    </View>
                    <View style={styles.delivery_information}>
                        <Text style={styles.info_text}>Departure</Text>
                        <Text style={{color:'black'}}>15 June, 2022</Text>
                        <Arrow />
                    </View>
                    <View style={styles.delivery_location}>
                        <Text style={styles.info_text}>To</Text>
                        <Text style={{color:'black'}}>Istanbul, TR</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.details_button}>
                        <Text style={styles.buttons_header}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.select_button}>
                        <Text style={styles.buttons_header}>Select</Text>
                    </TouchableOpacity>
                </View>
                </View>
           </View>
           <View style={styles.footer}>
               <Image source={require('./assets/HeadImage.png')} style={styles.head_image}/>
               <View style={styles.footer_user_info}>
                   <Profile />
                   <Text style={styles.footer_name_text}>John D.</Text>
               </View>
               <View style={styles.explain_text}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
               </View>
           </View>
           <View style={styles.navigation_container}>
               <View style={styles.navigation}>
                    <View style={styles.nav_icons_container}>
                        <View>
                            <Home />
                            <Text>Home</Text>
                        </View>
                        <View>
                            <Create />
                            <Text>Create</Text>
                        </View>
                        <View>
                            <Search />
                            <Text>Search</Text>
                        </View>
                        <View>
                            <NavProfile />
                            <Text>Profile</Text>
                        </View>
                    </View>
                    <View style={styles.home_indicator_light_container}>
                            <View style={styles.home_indicator_light}></View>
                        </View>
               </View>
           </View>
        </SafeAreaView>
    );
}
