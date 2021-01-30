import React from 'react';
import {Dimensions, Image} from 'react-native';
import {Icons} from '../../assets';
import Carousel from 'react-native-snap-carousel';
export default function myCarousel(props) {
  const {
    data,
    firstItem,
    sliderWidth,
    itemWidth,
    renderItem,
    inactiveSlideScale,
    inactiveSlideOpacity,
    loop,
    autoplay,
    onSnapToItem
  } = props;
  // let promos = [Icons.promo1, Icons.promo2, Icons.promo3];
  let deviceWidth = Dimensions.get('window').width;

  // let renderItems = ({item, index}) => {
  //   return (
  //     <Image source={item} key={index} style={{width: '100%', height: 150}} />
  //   );
  // };

  return (
    <Carousel
      data={data}
      firstItem={firstItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      renderItem={renderItem}
      inactiveSlideScale={inactiveSlideScale}
      inactiveSlideOpacity={inactiveSlideOpacity}
      loop={loop}
      autoplay={autoplay}
      onSnapToItem={onSnapToItem}
    />
  );
}
