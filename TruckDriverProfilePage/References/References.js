/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import styles from './References.style';

import Head from '../Components/Head/Head';
import Navigation from '../../HomePage/Components/Navigation/Navigation';

import PP1 from './assets/PP1';
import PP2 from './assets/PP2';
import PP3 from './assets/PP3';

export default function References(){

    return (
        <SafeAreaView style={styles.container}>
            <Head />
            <Navigation />
            <View style={styles.background_info}>
                <View style={styles.border}>
                </View>
                <View style={styles.background_text}>
                    <Text style={{color:'black', fontWeight: 'bold'}}>Super Dog</Text>
                    <Text style={{color: 'black'}}>Great and safe delivery. thanks for everything. Hope to work again.</Text>
                    <Text>20.05.2021</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
