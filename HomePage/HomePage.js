/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView} from "react-native";
import styles from './HomePage.style';

import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

export default function HomePage(props){

    const nav = props.navigation;

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={nav}/>
            <Body />
            <Footer />
            <Navigation />
        </SafeAreaView>
    );
}
