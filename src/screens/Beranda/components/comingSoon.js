import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icons} from '../../../../assets';
import MyCarousel from '../../../components/myCaraousel';
export default function comingSoon() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  const movies = [
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
  const deviceWidth = Dimensions.get('window').width;

  const renderItems = ({item, index}) => {
    return (
      <View key={index}>
        <Image
          source={item.poster}
          key={index}
          style={{width: '90%', height: 250, marginVertical: 10}}
          borderRadius={10}
        />
        <Text style={{textAlign: 'left'}}>{item.title}</Text>
        <Text
          style={styles.badge}>
          CGV
        </Text>
      </View>
    );
  };
  return (
    <>
      <View style={[styles.contentRow, {paddingHorizontal: 10}]}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Akan Datang</Text>
        </View>
        <View
          style={[styles.contentRow, {flex: 2, justifyContent: 'flex-end'}]}>
          <Text> Semua </Text>
          <Image source={Icons.arrow_right} style={{height: 24, width: 24}} />
        </View>
      </View>
      <Text style={{marginHorizontal: 20, color: 'grey'}}>
        Film-film seru yang akan tayang di bioskop
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
    backgroundColor: 'red',
    color: 'white',
    width: 40,
    textAlign: 'center',
    borderRadius: 3,
    fontSize: 12,
    marginBottom: 10,
  }
});
