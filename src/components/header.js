import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icons} from '../../assets';
export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Image source={Icons.user} style={{height: 24, width: 24}} />
        </View>
        <View style={{flex: 5, alignItems: 'center'}}>
          <Image source={Icons.logo} />
        </View>
        <View style={{flex: 1}}></View>
      </View>

     
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 3,
    marginTop: Platform.OS === 'android' ? 20 : 0
  },
});
