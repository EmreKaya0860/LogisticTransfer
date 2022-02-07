/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styles from './SearchPage.style';

import Header from '../HomePage/Components/Header/Header';
import Body from '../HomePage/Components/Body/Body';
import Footer from '../HomePage/Components/Footer/Footer';
import SearchArea from './Components/SearchArea/SearchArea';

export default function SearchPage(props){

    const nav = props.navigation;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Header nav={nav}/>
            <SearchArea />
            <Body />
            <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}