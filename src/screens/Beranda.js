import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Header from '../components/header';
import Promo from '../components/promo';
import OnAir from '../components/onair';
export default function Beranda() {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <Header />
        <Promo />
        <OnAir />
      </ScrollView>
    </View>
  );
}
