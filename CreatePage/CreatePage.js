import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './CreatePage.style';

import Header from './Components/Header/Header';

export default function CreatePage(){

    return(
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    );
}