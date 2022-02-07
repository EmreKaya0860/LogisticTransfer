/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from './MenuPage.style';

import PP from '../HomePage/assets/Icons/Profile.svg';
import Verified from './assets/Verified.svg';

import Exit from './assets/MenuIcons/Exit.svg';
import Plus from './assets/MenuIcons/Plus.svg';
import Settings from './assets/MenuIcons/Settings.svg';
import Versions from './assets/MenuIcons/Versions.svg';
import Warning from './assets/MenuIcons/Warning_hex.svg';


export default function MenuPage(props){

    function NavigateToSettings(){
        props.navigation.navigate("SettingsPage");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile_information_container}>
                <PP width={80} height={80}/>
                <Text style={styles.name_text}>George K.</Text>
                <Text style={{color:'black'}}>george@gmail.com</Text>
                <View style={styles.verified_container}>
                    <Verified />
                    <Text style={{color: '#5550F2'}}>Truck Driver</Text>
                </View>
            </View>
            <View style={styles.navigation_buttons_container}>
                <TouchableOpacity>
                    <View style={styles.button_container}>
                        <Text style={styles.buttons_title}>Tırlarım</Text>
                        <Versions />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button_container}>
                        <Text style={styles.buttons_title}>Yeni Tır Oluştur</Text>
                        <Plus />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button_container}>
                        <Text style={styles.buttons_title}>Hizmet Koşulları</Text>
                        <Warning />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={NavigateToSettings}>
                    <View style={styles.button_container}>
                        <Text style={styles.buttons_title}>Ayarlar</Text>
                        <Settings />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button_container}>
                        <Text style={styles.exit_button}>Çıkış Yap</Text>
                        <Exit />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}