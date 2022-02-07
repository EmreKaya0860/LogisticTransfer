/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import DatePicker from 'react-native-date-picker';
import { Checkbox } from 'react-native-paper';
import styles from './Create.style';
import Navigation from '../HomePage/Components/Navigation/Navigation';

import LeftArrow from './assets/chevron_left.svg';
import Back from './assets/a.svg';
import LeftCircle from './assets/circle_left';
import RightCircle from './assets/circle_right';

import Deneme from './deneme/Deneme';

export default function Create(){
    const countries = ["Egypt", "Canada", "Australia", "Ireland", "Turkey"];
    const cities = ["İstanbul", "Ankara", "Elazığ", "Denizli"];
    const [checked, setChecked] = React.useState(false);
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.deneme}>
                <View style={styles.deneme}>
                <View style={styles.header}>
                    <View>
                        <LeftArrow />
                        <Text>Create Transportation</Text>
                    </View>
                    <Text>Oluşturmak istediğiniz transfer bilgilerini seçiniz</Text>
                </View>
            
                <View style={styles.image_change_button}>
                    <TouchableOpacity>
                        <LeftCircle />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RightCircle />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.image_confirm_button}>
                    <Text style={styles.image_confirm_button_text}>Seç</Text>
                </TouchableOpacity>

                <View style={styles.body}>
                    <Text>Nereden?</Text>
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <SelectDropdown
                        data={cities}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <Text>Nereye?</Text>
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <SelectDropdown
                        data={cities}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <Text>Kalkış</Text>
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <SelectDropdown
                        data={cities}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <Text>Varış</Text>
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <SelectDropdown
                        data={cities}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                    <View style={styles.condition_confirm}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Text>Tüm bilgileri kontrol ettim ve onaylıyorum</Text>
                    </View>
                    <View style={styles.footer_buttons}>
                        <TouchableOpacity style={styles.cancel_button}>
                            <Text style={styles.cancel_button_text}>İptal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.save_button}>
                            <Text style={styles.save_button_text}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}