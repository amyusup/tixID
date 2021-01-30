import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Header from '../components/header';
import Promo from '../components/promo';
import OnAir from '../components/onair';
import Event from '../components/event';
import Streaming from '../components/streaming';
import Video from '../components/video';
import Spotlight from '../components/spotlight';
export default function Beranda() {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <Header />
        {/* <Promo />
        <OnAir />
        <Event />
        <Streaming />
        <Video /> */}
        <Spotlight />
      </ScrollView>
    </View>
  );
}
