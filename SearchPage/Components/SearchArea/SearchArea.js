/* eslint-disable prettier/prettier */
import React from "react";
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './SearchArea.style';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Settings from '../../assets/setting.svg';
import Search from '../../assets/search.svg';

export default function SearchArea() {
    
    return(
        <View style={styles.container}>
            <View style={styles.search_area_container}>
                <TextInput 
                    style={styles.text_input}
                    placeholder="search transportation"
                />
                <TouchableOpacity>
                    <Settings width='40' height='40'/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.buttons_header}>Filters</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.buttons_header}>Sort By</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.buttons_header}>Discover</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}