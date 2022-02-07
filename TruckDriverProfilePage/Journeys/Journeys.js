/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './Journeys.style';

import Head from '../Components/Head/Head';
import Navigation from '../../HomePage/Components/Navigation/Navigation';

export default function Journeys(){

    return(
        <SafeAreaView style={styles.container}>
            <Head />
            <Navigation />
        </SafeAreaView>
    );
}