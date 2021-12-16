import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from "./LandingPage.style";
import BackgroundImage from "./assets/Background.svg";
import Title from "./assets/Title.svg";

export default function App(){

  return(
    <SafeAreaView style={styles.background}>
      <BackgroundImage style={styles.background_image}/>
    </SafeAreaView>
  )
}