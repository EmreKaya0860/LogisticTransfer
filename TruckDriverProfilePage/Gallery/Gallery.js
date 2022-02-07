/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './Gallery.style';

import Head from '../Components/Head/Head';
import Navigation from '../../HomePage/Components/Navigation/Navigation';

import Image1 from './assets/Img1.svg';
import Image2 from './assets/Img2.svg';
import Image3 from './assets/Img3.svg';
import Image4 from './assets/Img4.svg';

export default function Gallery(){

    return (
        <SafeAreaView style={styles.container}>
            <Head />
            <Navigation />
            <View style={styles.images}>
                <View>
                    <Image1 />
                    <Image3 />
                </View>
                <View>
                    <Image2 />
                    <Image4 />
                </View>
            </View>
        </SafeAreaView>
    );
}