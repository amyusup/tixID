import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icons} from '../../../../assets';
import Carousel from 'react-native-snap-carousel';
import MyCarousel from '../../../components/myCaraousel'

export default function streaming() {
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
        <Text style={{textAlign:"left"}}>{item.title}</Text>
      </View>
    );
  };
  return (
    <>
      <View style={[styles.contentRow, { paddingHorizontal:10}]}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> Nonton Online</Text>
        </View>
        <View style={[styles.contentRow, {flex: 1, }]}>
          <Image source={Icons.new_gold_badge} style={{height: 60, width: 60}} />
        </View>
        <View style={[styles.contentRow, {flex: 2,justifyContent:"flex-end"}]}>
          <Text> Semua </Text>
          <Image source={Icons.arrow_right} style={{height: 24, width: 24}} />
        </View>
      </View>
      <Text style={{marginHorizontal: 20, color: 'grey'}}>
        Sewa dan tonton film menarik kapanpun!
      </Text>

      <MyCarousel
        data={movies}
        firstItem={0}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth / 2}
        renderItem={renderItems}
        inactiveSlideScale={5}
        inactiveSlideOpacity={1}
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
  },
});
