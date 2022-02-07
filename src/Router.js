/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../HomePage/HomePage';
import CreatePage from '../Create/Create';
import ProfilePage from '../TruckDriverProfilePage/Gallery/Gallery';
import MenuPage from '../MenuPage/MenuPage';
import SearchPage from '../SearchPage/SearchPage';
import SettingsPage from '../SettingsPage/SettingsPage';


import TabNavigation from '../HomePage/Components/Navigation/Navigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={TabNavigation}>
            <Tab.Screen name="HomePage" component={HomePage}/>
            <Tab.Screen name="CreatePage" component={CreatePage}/>
            <Tab.Screen name="ProfilePage" component={ProfilePage}/>
            <Tab.Screen name="SearchPage" component={SearchPage}/>
            <Stack.Screen name="SettingsPage" component={SettingsPage}/>
        </Tab.Navigator>
    );
}

export default function App(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LandingPage" component={LandingPage}/>
                <Stack.Screen name="LoginPage" component={LoginPage}/>
                <Stack.Screen name="RegisterPage" component={RegisterPage}/>
                <Stack.Screen name="HomePage" component={HomeTab}/>
                <Stack.Screen name="MenuPage" component={MenuPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
