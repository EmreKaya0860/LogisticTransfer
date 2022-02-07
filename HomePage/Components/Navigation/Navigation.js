/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Navigation.style';

import Home from '../../assets/Icons/Home.svg';
import Create from '../../assets/Icons/Create.svg';
import Search from '../../assets/Icons/Search.svg';
import NavProfile from '../../assets/Icons/Profile.svg';

export default function Navigation(props){

    function NavigationToHome(){
        props.navigation.navigate('HomePage');
    }
    function NavigateToCreate(){
        props.navigation.navigate('CreatePage');
    }

    function NavigateToProfile(){
        props.navigation.navigate('ProfilePage');
    }

    function NavigateToSearch(){
        props.navigation.navigate('SearchPage');
    }

    return(
        <View style={styles.navigation_container}>
        <View style={styles.navigation}>
             <View style={styles.nav_icons_container}>
                 <TouchableOpacity onPress={NavigationToHome}>
                        <Home />
                        <Text>Home</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={NavigateToCreate}>
                     <Create />
                     <Text>Create</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={NavigateToSearch}>
                     <Search />
                     <Text>Search</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={NavigateToProfile}>
                     <NavProfile />
                     <Text>Profile</Text>
                 </TouchableOpacity>
             </View>
             <View style={styles.home_indicator_light_container}>
                     <View style={styles.home_indicator_light}></View>
                 </View>
        </View>
    </View>
    );
}