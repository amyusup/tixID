import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Header from '../../components/header';
import Promo from './components/promo';
import OnAir from './components/onair';
import Event from './components/event';
import Streaming from './components/streaming';
import Video from './components/video';
import Spotlight from './components/spotlight';
import News from './components/news';
import ComingSoon from './components/comingSoon';
export default function index() {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <Header />
        <Promo />
        <OnAir />
        <Text style={styles.line}></Text>
        <Event />
        <Text style={styles.line}></Text>
        <Streaming />
        <Text style={styles.line}></Text>
        <Video />
        <Text style={styles.line}></Text>
        <Spotlight />
        <Text style={styles.line}></Text>
        <News />
        <ComingSoon />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    width: '100%',
    marginVertical: 10,
  },
});
