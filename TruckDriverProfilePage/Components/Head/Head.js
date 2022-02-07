/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Head.style';

import PP from '../../../HomePage/assets/Icons/Profile.svg';
import Verified from '../../../MenuPage/assets/Verified.svg';

export default function Head(){
    return(
        <View style={styles.container}>
            <View style={styles.profile_top}>
                <PP width={80} height={80}/>
                <View >
                    <Text style={styles.name_text}>George K.</Text>
                    <View style={styles.verified_container}>
                        <Verified />
                        <Text style={{color: '#5550F2'}}>Truck Driver</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.follow_button}>
                    <Text style={styles.follow_button_title}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profile_stats}>
                <View style={styles.follower_container}>
                    <Text style={{color: '#5550F2', fontWeight: 'bold'}}>120</Text>
                    <Text style={{color: '#5550F2'}}>Follower</Text>
                </View>
                <View style={styles.following_delivery_style}>
                    <Text style= {{color:'black', fontWeight: 'bold'}}>200</Text>
                    <Text style= {{color:'black'}}>Following</Text>
                </View>
                <View style={styles.following_delivery_style}>
                    <Text style= {{color:'black', fontWeight: 'bold'}}>40</Text>
                    <Text style= {{color:'black'}}>Delivery</Text>
                </View>
            </View>
            <View style={styles.profile_info}>
                <Text style= {styles.profile_info_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <TouchableOpacity>
                    <Text style={{color: '#5550F2', fontWeight: 'bold'}}>More...</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profile_nav}>
                <TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>Journeys</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>References</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}