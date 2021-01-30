import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icons} from '../../../../assets';
import Carousel from 'react-native-snap-carousel';
import MyCarousel from '../../../components/myCaraousel'
export default function spotlight() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  let movies = [
    {
      title: 'Rilis Trailer, Godzila vs. Kong',
      views: '277',
      like: '150',
      poster: Icons.spotlight,
    },

    {
      title: 'Rilis Trailer, Godzila vs. Kong',
      views: '277',
      like: '150',
      poster: Icons.spotlight,
    },

    {
      title: 'Rilis Trailer, Godzila vs. Kong',
      views: '277',
      like: '150',
      poster: Icons.spotlight,
    },
  ];
  const activeMovie = movies[activeIndex];
  let deviceWidth = Dimensions.get('window').width;

  const renderItems = ({item, index}) => {
    return (
      <View key={index}>
        <Image
          source={item.poster}
          key={index}
          style={{
            width: '90%',
            height: 200,
            borderColor: 'grey',
            borderWidth: 0.1,
            marginVertical: 3,
          }}
          borderRadius={10}
        />
        <View style={styles.descBox}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <View
            style={{
              marginVertical: 3,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.itemDetail}>
              <Image source={Icons.eye} style={{height: 10, width: 17}} />{' '}
              {item.views}
            </Text>
            <Text style={styles.itemDetail}>
              {'  '}{' '}
              <Image source={Icons.like} style={{height: 14, width: 14}} />{' '}
              {item.like}
            </Text>
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
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>
          Spotlight
        </Text>
      </View>
      <Text style={{marginHorizontal: 20, color: 'grey'}}>
        Berita hiburan terhangat untuk Anda!
      </Text>
      <MyCarousel
        data={movies}
        firstItem={0}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth - 50}
        renderItem={renderItems}
        inactiveSlideScale={5}
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
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: '25%',
    right: 15,
    marginTop: 10,
    backgroundColor: '#1A2B50',
  },
  descBox: {
    width: '90%',
    marginBottom: 10,
    overflow: 'hidden',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemDetail: {
    fontSize: 12,
    color: 'grey',
  },
});
