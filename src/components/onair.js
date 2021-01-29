import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icons} from '../../assets';
import Carousel from 'react-native-snap-carousel';

export default function onair() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  let movies = [
    {
      title: 'BAD BOYS',
      poster: Icons.poster1,
    },
    {
      title: 'BIRDS OF PREY',
      poster: Icons.poster2,
    },
    {
      title: 'ENTER THE FAT DRAGON',
      poster: Icons.poster3,
    },
  ];
  const activeMovie = movies[activeIndex];
  let deviceWidth = Dimensions.get('window').width;

  let renderItems = ({item, index}) => {
    const isActive = activeMovie === item;
    return (
      <View key={index}>
        <Image
          source={item.poster}
          key={index}
          style={{width: '90%', height: 250, marginVertical: 10}}
          borderRadius={10}
        />
        {isActive && (
          <Image
            source={Icons.buy_ticket}
            style={{width: '90%', height: 35, position: 'absolute', bottom: 0}}
          />
        )}
      </View>
    );
  };
  return (
    <>
      <View style={[styles.contentRow, {paddingVertical: 10}]}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> Sedang Tayang</Text>
        </View>
        <View style={[styles.contentRow, {flex: 1}]}>
          <Text> Semua </Text>
          <Image source={Icons.arrow_right} style={{height: 24, width: 24}} />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.badge, {borderColor: '#118EE8'}]}>
          <Text style={{color: '#118EE8'}}>Semua Bioskop</Text>
        </View>
        <View style={[styles.badge, {borderColor: 'grey'}]}>
          <Text>XXI</Text>
        </View>
      </View>

      <Carousel
        data={movies}
        firstItem={1}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth / 2}
        renderItem={renderItems}
        inactiveSlideScale={5}
        inactiveSlideOpacity={1}
        loop={true}
        autoplay={true}
        onSnapToItem={(activeIndex) => setActiveIndex(activeIndex)}
      />
      <View>
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
          {activeMovie.title}
        </Text>
      </View>
      <Image source={Icons.xxi_gold_badge} style={{alignSelf: 'center', height:40, width:50}} />
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
  },
});
