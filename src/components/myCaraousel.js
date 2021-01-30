import React from 'react';
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
