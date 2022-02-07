/* eslint-disable prettier/prettier */
import React from "react";
import {SafeAreaView, View, Text, TextInput, ScrollView} from 'react-native';
import styles from './SettingsPage.style';

import PP from '../HomePage/assets/Icons/Profile.svg';
import Settings from './assets/Settings_icon.svg';
import UserIcon from './assets/user_icon.svg';

import CheckSettings from './Components/CheckSettings/CheckSettings';
import SettingsButtons from './Components/SettingsButtons/SettingsButtons';

export default function SettingsPage(){

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.user_info}>
                <PP width={80} height={80}/>
                <Text style={styles.name_text}>George K.</Text>
            </View>
            <View style={styles.settings_container}>
                <View style={styles.settings_text_container}>
                    <Settings width={25} height={25}/>
                    <Text style={styles.settings_text}>Settings</Text>
                </View>
                <TextInput
                    style={styles.search_container}
                />
            </View>
            <View style={styles.checkbox_settings_container}>
                <View style={styles.inner_container}>
                    <View style={styles.porfile_settings_header}>
                        <Text style={styles.text}>Profile Settings</Text>
                        <UserIcon />
                    </View>
                    <CheckSettings text="Yeni ilanlar açılınca haber ver"/>
                    <CheckSettings text="Arama geçmişime benzer içerikle öner"/>
                    <CheckSettings text="Kısacası buralara tik koyabileceğimiz ayarlar ve login sayfasindaki gibi inputboxlar olacak."/>
                    <CheckSettings text="Kısacası buralara tik koyabileceğimiz ayarlar ve login sayfasindaki gibi inputboxlar olacak."/>
                    <CheckSettings text="Kısacası buralara tik koyabileceğimiz ayarlar ve login sayfasindaki gibi inputboxlar olacak."/>
                    <CheckSettings text="Kısacası buralara tik koyabileceğimiz ayarlar ve login sayfasindaki gibi inputboxlar olacak."/>
                </View>
            </View>
            <SettingsButtons text="PAY Settings"/>
            <SettingsButtons text="Location"/>
            <SettingsButtons text="Permission"/>
            <SettingsButtons text="Login info"/>
            <SettingsButtons text="Notifications"/>
        </SafeAreaView>
    );
}
