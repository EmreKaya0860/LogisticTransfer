/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text,Image } from "react-native";
import styles from './Footer.style';

import Profile from '../../assets/PP.svg';

export default function Footer(){

    return(
        <View style={styles.footer}>
               <Image source={require('../../assets/HeadImage.png')} style={styles.head_image}/>
               <View style={styles.footer_user_info}>
                   <Profile />
                   <Text style={styles.footer_name_text}>John D.</Text>
               </View>
               <View style={styles.explain_text}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
               </View>
           </View>
    );
}