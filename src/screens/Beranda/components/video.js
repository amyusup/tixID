import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icons} from '../../../../assets';
import MyCarousel from '../../../components/myCaraousel'

export default function video() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const movies = [
    {
      title: 'STAND BY ME DORAEMON',
      views: '77',
      like: '22',
      date: '30 Jan 2021',
      poster: Icons.trailer,
    },
    {
      title: 'STAND BY ME DORAEMON',
      views: '77',
      like: '22',
      date: '30 Jan 2021',
      poster: Icons.trailer,
    },
    {
      title: 'STAND BY ME DORAEMON',
      views: '77',
      like: '22',
      date: '30 Jan 2021',
      poster: Icons.trailer,
    },
  ];
  const deviceWidth = Dimensions.get('window').width;

  const renderItems = ({item, index}) => {
    return (
      <View key={index}>
        <Image
          source={item.poster}
          key={index}
          style={styles.imgPoster}
          borderRadius={10}
        />
        <View style={styles.badge}>
          <Text style={{color: '#FFC964', fontSize: 10}}>{item.like} Suka</Text>
        </View>
        <View style={styles.descBox}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <View style={{marginVertical: 3, flexDirection: 'row'}}>
            <Text style={styles.itemDetail}>{item.views} Ditonton | </Text>
            <Text style={styles.itemDetail}>{item.date}</Text>
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
          Video
        </Text>
      </View>
      <Text style={{marginHorizontal: 20, color: 'grey'}}>
        Trailer, wawancara, di balik layar, dan banyak lagi!
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
    right:15,
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
  imgPoster:{
    width: '90%',
    height: 200,
    borderColor: 'grey',
    borderWidth: 0.1,
    marginVertical: 3,
  }
});
