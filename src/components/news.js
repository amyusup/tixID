import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {Icons} from '../../assets';

export default function news() {
  let news = [
    {
      title: 'Godzila Tayang Tahun Ini ?',
      views: '22',
      like: '49',
      posted: '2 jam lalu',
      img: Icons.poster1,
    },
    {
      title: 'Godzila Tayang Tahun Ini ?',
      views: '22',
      like: '49',
      posted: '2 jam lalu',
      img: Icons.poster1,
    },
    {
      title: 'Godzila Tayang Tahun Ini ?',
      views: '22',
      like: '49',
      posted: '2 jam lalu',
      img: Icons.poster1,
    },
  ];

  let deviceWidth = Dimensions.get('window').width;

  const renderItems = ({item}) => {
    return (
      <>
        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <Image
            source={Icons.spotlight}
            style={{height: 80, width: 80, borderRadius: 10, flex: 1}}
          />
          <View style={{flex: 3}}>
            <View style={styles.contentRow}>
              <Text style={{fontSize: 15, marginLeft: 15, flex: 1}}>
                {item.title}
              </Text>
              <Text style={[styles.badge]}>News</Text>
            </View>
            <View
              style={[styles.contentRow, {position: 'absolute', bottom: 0}]}>
              <Text style={styles.itemDetail}>
                <Image source={Icons.eye} style={{height: 10, width: 17}} />{' '}
                {item.views}
              </Text>
              <Text style={styles.itemDetail}>
                {'  '}{' '}
                <Image source={Icons.like} style={{height: 14, width: 14}} />{' '}
                {item.like}
              </Text>
              <Text style={[styles.itemDetail, {flex: 3, textAlign: 'right'}]}>
                {item.posted}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            width: deviceWidth,
            marginVertical: 10,
          }}></Text>
      </>
    );
  };

  return (
    <>
      <View
        style={[
          styles.contentRow,
          {paddingVertical: 10, paddingHorizontal: 10},
        ]}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>TIX Now</Text>
        </View>
        <View style={[styles.contentRow, {flex: 1}]}>
          <Text> Semua </Text>
          <Image source={Icons.arrow_right} style={{height: 24, width: 24}} />
        </View>
      </View>
      <Text style={{marginHorizontal: 10, color: 'grey', marginBottom: 10}}>
        Update berita terbaru seputar dunia film
      </Text>

      <FlatList data={news} renderItem={renderItems} />
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
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 15,
    color: 'grey',
    borderColor: 'grey',
    fontSize: 10,
  },
  itemDetail: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 15,
    flex: 1,
  },
});
