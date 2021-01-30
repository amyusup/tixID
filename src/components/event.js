import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icons} from '../../assets';
import Carousel from 'react-native-snap-carousel';

export default function event() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  let movies = [
    {
      title: 'W1 Drive-In Senja Alsut 3: Onward',
      date: 'Sab, 30 Jan 2021',
      desc: 'Lapangan Parkir Utama Mall',
      price: 'Rp460.000',
      disc: 'Rp200.000',
      poster: Icons.poster1,
    },
    {
      title: 'W1 Drive-In Senja Alsut 3: Onward',
      date: 'Sab, 30 Jan 2021',
      desc: 'Lapangan Parkir Utama Mall',
      price: 'Rp460.000',
      disc: 'Rp200.000',
      poster: Icons.poster2,
    },
    {
      title: 'W1 Drive-In Senja Alsut 3: Onward',
      date: 'Sab, 30 Jan 2021',
      desc: 'Lapangan Parkir Utama Mall',
      price: 'Rp460.000',
      disc: 'Rp200.000',
      poster: Icons.poster3,
    },
  ];
  const activeMovie = movies[activeIndex];
  let deviceWidth = Dimensions.get('window').width;

  let renderItems = ({item, index}) => {
    return (
      <View key={index}>
        <Image
          source={item.poster}
          key={index}
          style={{width: '90%', height: 250, marginVertical: 10}}
          borderRadius={10}
        />
        <View style={styles.badge}>
          <Text style={{color: 'white', fontSize: 10}}>Tersedia</Text>
        </View>
        <View style={styles.descBox}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <View style={[styles.contentRow, {marginVertical: 3}]}>
            <Text style={{fontSize: 12, flex: 4}}>{item.date}</Text>
            <Text style={styles.itemDisc}>{item.disc}</Text>
          </View>
          <View style={styles.contentRow}>
            <Text style={{fontSize: 12, flex: 3, color: 'grey'}}>
              {item.desc}
            </Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>
          Event Untuk Anda
        </Text>
        <Image source={Icons.new_gold_badge} style={{height: 60, width: 60}} />
      </View>
      <Text style={{marginHorizontal: 10, color: 'grey'}}>
        Hiburan seru untuk bikin tetap semangat!
      </Text>
      <Carousel
        data={movies}
        firstItem={0}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth - 50}
        renderItem={renderItems}
        onSnapToItem={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 7,
    marginTop: 10,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  descBox: {
    width: '90%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 10,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemDisc: {
    fontSize: 10,
    flex: 1,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'grey',
  },
  itemPrice: {
    fontSize: 12,
    flex: 1,
    color: '#118EE8',
    fontWeight: 'bold',
  },
});
