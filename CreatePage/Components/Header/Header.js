import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';

import BackgroundImage from '../../assets/a.svg';
import LeftArrow from '../../assets/chevron_left.svg';

export default function Header(){

    return(
        <View style={styles.container}>
            <View style={styles.explain_text_container}>
                <View style={styles.title_container}>
                    <LeftArrow />
                    <Text style={styles.title}>Create Treansportation</Text>
                </View>
                <Text style={styles.explain_text}>Oluşturmak istediğiniz TRansfer bilgilerini seçin ve devamında akloıma bir şey gelmedi.</Text>
            </View>
            <View style={styles.back_image}>
                <BackgroundImage />
            </View>
        </View>
    );
}