import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icons} from '../../assets';
export default function Header() {
  return (
    <>

      <View style={styles.location}>
        <View style={{flex: 1}}>
          <Image source={Icons.location} style={{height: 20, width: 12}} />
        </View>
        <View style={{flex: 8}}>
          <Text>BOGOR</Text>
        </View>
        <View style={{flex: 1}}>
          <Image source={Icons.arrow_down} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  location: {
    backgroundColor: '#F4F4F4',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
