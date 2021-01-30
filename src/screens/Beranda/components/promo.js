import React from 'react';
import {Dimensions, Image} from 'react-native';
import {Icons} from '../../../../assets';
import Carousel from 'react-native-snap-carousel';
import MyCarousel from '../../../components/myCaraousel';
export default function promo() {
  let promos = [Icons.promo1, Icons.promo2, Icons.promo3];
  let deviceWidth = Dimensions.get('window').width;

  let renderItems = ({item, index}) => {
    return (
      <Image source={item} key={index} style={{width: '100%', height: 150}} />
    );
  };

  return (
    // <Carousel
    //   data={promos}
    //   sliderWidth={deviceWidth}
    //   itemWidth={deviceWidth}
    //   renderItem={renderItems}
    //   inactiveSlideScale={5}
    //   loop={true}
    //   autoplay={true}
    // />
    <MyCarousel
      data={promos}
      sliderWidth={deviceWidth}
      itemWidth={deviceWidth}
      renderItem={renderItems}
      inactiveSlideScale={5}
      loop={true}
      autoplay={true}
    />
  );
}
