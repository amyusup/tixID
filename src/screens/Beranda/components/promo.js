import React from 'react';
import {Dimensions, Image} from 'react-native';
import {Icons} from '../../../../assets';
import MyCarousel from '../../../components/myCaraousel';
export default function promo() {
  const promos = [Icons.promo1, Icons.promo2, Icons.promo3];
  const deviceWidth = Dimensions.get('window').width;

  const renderItems = ({item, index}) => {
    return (
      <Image source={item} key={index} style={{width: '100%', height: 150}} />
    );
  };

  return (
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
